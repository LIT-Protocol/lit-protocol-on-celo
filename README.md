# Cross chain Lit Protocol signature verification on Celo with a NFT mirroring example

![](https://dtr.limaois.me/039be8ee-6b2b-40ca-889e-eeae7148c550.png)
This project is a work for https://gitcoin.co/issue/lit-protocol/cross-chain-lit-protocol-signature-verification/1/100027187

For demo, visit https://flyinglimao.github.io/lit-protocol-on-celo

## Reference

- Solidity JWT by OpenZeppelin - https://github.com/OpenZeppelin/solidity-jwt : The idea of parsing JWT come from this
  - https://github.com/adriamb/SolRsaVerify/
  - https://github.com/chrisdotn/jsmnSol
  - https://github.com/Arachnid/solidity-stringutils/
- Noble BLS12-381 by paulmilr - https://github.com/paulmillr/noble-bls12-381 : The method to compute come from this
- LitJsSdk : https://github.com/LIT-Protocol/lit-js-sdk
- Celo CIP-0031 : https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0031.md
- BigModExp : https://docs.klaytn.com/smart-contract/precompiled-contracts

## Architecture

- The core contract is LitVerify.sol which depends on Base64.sol, JsmnSolLib.sol, Strings.sol
  - In this contract, it considers the Lit Network Public Key as a constant and precomputed negate of the public key
  - Most functions inside were referred to the mentioned repo, Noble BLS12-381, and rewritten into Solidity with pre-compiles
  - Some arguments of some contract were turned into constant in favor of saving gas
- The example contract is MirrorNFT.sol
  - It provides a function `claim` that user can pass processed JWT and mint a NFT with the same token URI as Ethereum
  - Although there are many checks inside the contract, improper inputs may still be reverted somewhere in addition to the checks
  - Transfer is not allowed in the contract, but user can transfer on Ethereum and re-claim

## Demo

- Web App: https://flyinglimao.github.io/lit-protocol-on-celo
- NFT Contract: [0x52430577E041aA1977d8FBb7349CD13725d2955F](https://alfajores-blockscout.celo-testnet.org/address/0x52430577E041aA1977d8FBb7349CD13725d2955F/)

* In this demo, you can input a ERC721 contract address and a token id (you don't have to own it). It will mint a NFT on Celo that mirrored from Ethereum.

## Idea about passing data

As I was developing contract, there is a obvious problem that I need to parse hex string to bytes,
because the data in JSON is stored in string. To more efficiently use the data, protobuf might be
a considerable choice, which is also commonly used and won't make it limit to ethereum. (While
RLP is more easily to decode in solidity.) Besides, the first part (header) is useless in most
condition, deleteing it might be simple and powerful (thus we can skip decoding and concating).
