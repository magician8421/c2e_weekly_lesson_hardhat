const { ethers } = require("hardhat");
const hre = require("hardhat");
async function show() {
  const _contract = await ethers.getContractFactory("PureView");
  const _pureView = await _contract.deploy();
  await _pureView.waitForDeployment();
  console.log(await _pureView.notModifiy(1, 2));
  await _pureView.modifiyState();
  const storageValue = await ethers.provider.getStorage(
    await _pureView.getAddress(),
    0
  );

  console.log(`Storage value at slot`, storageValue);
}

show();
