module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const mirrorNFT = await deploy('MirrorNFT', {
    from: deployer,
    args: ['0x88DCA5daE53DC13EBB8bd4E65Dc0c8a2D384bc88'],
    log: true,
  });
  console.log(mirrorNFT, mirrorNFT.address);
};
module.exports.tags = ['MirrorNFT'];
