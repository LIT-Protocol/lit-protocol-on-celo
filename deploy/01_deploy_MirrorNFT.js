module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const mirrorNFT = await deploy('MirrorNFT', {
    from: deployer,
    args: ['0x7d08af9a703f897c6cae78b21ae1c634750ccc59'],
    log: true,
  });
  console.log(mirrorNFT, mirrorNFT.address);
};
module.exports.tags = ['MirrorNFT'];
