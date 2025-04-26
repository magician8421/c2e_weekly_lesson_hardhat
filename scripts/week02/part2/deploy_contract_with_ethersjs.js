const hre = require("hardhat");

async function deploy() {
  const _contract = await hre.ethers.getContractFactory("Factory");
  const _deploy = await _contract.deploy();
  await _deploy.waitForDeployment();
  console.log(await _deploy.getAddress());
}
deploy();
