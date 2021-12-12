const { PointG2 } = require('@noble/bls12-381');
const ethers = window.ethers;
const LitJsSdk = window.LitJsSdk;

const ERC721ABI = [
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
];
const MirrorNFTABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'headerJson',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'payloadJson',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
const mNFT = new ethers.Contract(
  '0x52430577E041aA1977d8FBb7349CD13725d2955F',
  MirrorNFTABI
);

function log(str) {
  document.getElementById('log').innerHTML += `<p>${str}</p>`;
}
async function main() {
  if (!window.ethereum) {
    const btn = document.querySelector('button');
    btn.disabled = true;
    btn.innerHTML = 'Wallet not Detected';
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  const litNodeClient = new LitJsSdk.LitNodeClient();
  await litNodeClient.connect();
  console.log(litNodeClient);
  window.lit = litNodeClient;

  async function useCelo() {
    const { chainId } = await provider.getNetwork();
    if (chainId === 44787) return true;
    log('Not on Celo Alfajores, switching');
    const err = new Error('Not on Celo');
    err.code = 1;
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaef3' }],
      });
      return true;
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0xaef3',
                chainName: 'Celo Alfajores Testnet',
                nativeCurrency: {
                  name: 'CELO',
                  symbol: 'CELO',
                  decimals: 18,
                },
                blockExplorerUrls: [
                  'https://alfajores-blockscout.celo-testnet.org/',
                ],
                rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
              },
            ],
          });
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaef3' }],
          });
          return true;
        } catch (addError) {
          throw err;
        }
      }
      throw err;
    }
  }

  async function obtainJWT(address, tokenId) {
    if (address.length !== 42 || !address.startsWith('0x'))
      throw new Error('Invalid address');
    if (
      typeof tokenId !== 'number' &&
      !isFinite((tokenId = parseInt(tokenId))) &&
      tokenId.match(/0x[0-9a-fA-F]+/)[0] !== tokenId
    )
      throw new Error('Invalid tokenId');
    tokenId =
      typeof tokenId === 'number' ? '0x' + tokenId.toString(16) : tokenId;
    const callRequests = [
      {
        to: address,
        data: LitJsSdk.encodeCallData({
          abi: ERC721ABI,
          functionName: 'tokenURI',
          functionParams: [tokenId],
        }),
      },
      {
        to: address,
        data: LitJsSdk.encodeCallData({
          abi: ERC721ABI,
          functionName: 'ownerOf',
          functionParams: [tokenId],
        }),
      },
    ];
    const jwt = await litNodeClient.getSignedChainDataToken({
      callRequests,
      chain: 'ethereum',
    });
    const { verified, header, payload, signature } = LitJsSdk.verifyJwt({
      jwt,
    });
    if (!verified) throw Error('JWT invalid');

    return { header, payload, signature };
  }

  async function claimOnCelo(header, payload, signature) {
    await useCelo();
    const signatureB = Array.from(signature)
      .map((e) => ('0' + e.toString(16)).slice(-2))
      .join('');
    const signatureG2 = PointG2.fromSignature(signatureB);
    const signatureSlices = signatureG2.toHex().match(/.{1,96}/g);
    const pad = '00000000000000000000000000000000';
    const signatureParameter =
      '0x' +
      pad +
      signatureSlices[1] +
      pad +
      signatureSlices[0] +
      pad +
      signatureSlices[3] +
      pad +
      signatureSlices[2];
    log('Start claiming...');
    let acc;
    try {
      await provider.send('eth_requestAccounts', []);
      acc = provider.getSigner();
    } catch (err) {
      log('Wallet connection was rejected');
      throw new Error('Wallet connection was rejected');
    }

    try {
      const tx = await mNFT
        .connect(acc)
        .claim(
          JSON.stringify(header),
          JSON.stringify(payload),
          signatureParameter
        );
      log(
        `Claim tx submit, tx hash: <a href="https://alfajores-blockscout.celo-testnet.org/tx/${tx.hash}" target="_blank" rel="noopener noreferrer">${tx.hash}</a>`
      );

      log('Claim successed');
    } catch (err) {
      console.log(err);
      log('Claim failed, not sure why');
      throw new Error('Claim failed, not sure why');
    }
  }

  document.addEventListener(
    'lit-ready',
    function (e) {
      window.execute = async function () {
        const address = document.getElementById('address').value;
        const tokenId = document.getElementById('token').value;
        log(
          `Start mirroring NFT from Ethereum to Celo Alfajores, target token: ${address} - ${tokenId}`
        );

        let decoded;
        try {
          decoded = await obtainJWT(address, tokenId);
        } catch (err) {
          log(
            'Cannot derive data from Lit Protocol, please check the token is a ERC721 and on Ethereum or try again later'
          );
          return;
        }
        log('Successfully derive data from Lit Protocol');

        try {
          await claimOnCelo(decoded.header, decoded.payload, decoded.signature);
        } catch (err) {
          if (err.code === 1) log('Switch to Celo Alfajores failed');
        }
      };
    },
    false
  );
}

window.addEventListener('load', main);
