import { expect } from 'chai';
import { ethers } from 'hardhat';
import { MirrorNFT } from '../typechain/MirrorNFT';

describe('MirrorNFT', async function () {
  let mNFT: MirrorNFT;
  before(async function () {
    const MNFT = await ethers.getContractFactory('MirrorNFT');
    mNFT = (await MNFT.deploy(
      '0xFa07A38E8170F043EaA976F4c4b287bCA6E73e5f'
    )) as MirrorNFT;
    // mNFT = (await MNFT.attach('')) as MirrorNFT;
    console.log('mnft deployed:', mNFT.address);
  });
  it('claim', async function () {
    const headerJSON = '{"alg":"BLS12-381","typ":"JWT"}';
    const payloadJSON =
      '{"iss":"LIT","chain":"ethereum","iat":1639448716,"exp":1639491916,"callRequests":[{"to":"0x90ca8a3eb2574f937f514749ce619fdcca187d45","data":"0xc87b56dd0000000000000000000000000000000000000000000000000000000000001a26"},{"to":"0x90ca8a3eb2574f937f514749ce619fdcca187d45","data":"0x6352211e0000000000000000000000000000000000000000000000000000000000001a26"}],"callResponses":["0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000005568747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d576a4d524b36777645414262414e4678637075546844777466446a37644b7674613576314c79534744704c4b2f363639340000000000000000000000","0x0000000000000000000000004241d550b424e12d1eacf498d3babc5c9297719c"]}';
    const sig =
      '0x00000000000000000000000000000000109fec25ed091635fd0ae6e59ba0df973dbed583e8396554304c76c1b5a837bca49b14dff304461fc10fe1b7bb7c34a40000000000000000000000000000000014132a69f443268a5f9f917b9eb8cdb78996c1f839181ada4132a322da95c78808c215a28b00e8ccc007ffb7684c4f91000000000000000000000000000000001565e9f685825600001ed3626567396c73bde82f623d9e214aee15f20dc0f112b620a72452ee8d553868e7e708dfe3e500000000000000000000000000000000008f5847b3711c743b3b6865d1dbe230648404476bdd1eedd7eabc468ba08cb95452649885d109b9c422064413a78af3';

    await mNFT.claim(headerJSON, payloadJSON, sig);
    expect(await mNFT.totalSupply()).equal(1);
    console.log(await mNFT.ownerOf(1));
    console.log(await mNFT.tokenURI(1));
  });
});
