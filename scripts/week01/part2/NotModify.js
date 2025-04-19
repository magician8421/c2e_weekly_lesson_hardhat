const { ethers } = require("hardhat");
async function show() {
  const _contract = await ethers.getContractFactory("PureView");
  const _pureView = await _contract.deploy();
  await _pureView.waitForDeployment();
  console.log(await _pureView.notModifiy(1, 2));
}

show();
