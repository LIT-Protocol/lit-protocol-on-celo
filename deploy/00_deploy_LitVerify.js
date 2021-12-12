module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const litVerify = await deploy('LitVerify', {
    from: deployer,
    args: [],
    log: true,
  });
  console.log(litVerify, litVerify.address);
};
module.exports.tags = ['LitVerify'];
