const { ethers } = require("hardhat");
const hre = require("hardhat");
async function show() {
  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 ->0x00 : nonce0
  const _contract = await ethers.getContractFactory("Factory2");
  const _deploy = await _contract.deploy();
  await _deploy.waitForDeployment();
  console.log(await _deploy.getAddress());
  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266->0x68bbb25d542e358cf022bf49252c19dea462cfe5 :nonce 1
  const _response = await _deploy.deployV1(2024);
  const _receipt = await _response.wait();
  //console.log(await _deploy.deployV2(2024));
  console.log(await _deploy.predict(2024));
  const _demo = await ethers.getContractAt(
    "Demo",
    "0x" + _receipt.logs[0].topics[1].substring(26)
  );
  console.log(await _demo.a());
}

show();
