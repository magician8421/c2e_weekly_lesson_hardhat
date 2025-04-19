const { ethers } = require("hardhat");
const hre = require("hardhat");
async function show() {
  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 ->0x00 : nonce0
  const _contract = await ethers.getContractFactory("Factory");
  const _deploy = await _contract.deploy();
  await _deploy.waitForDeployment();
  console.log(await _deploy.getAddress());
  //0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266->0x5FbDB2315678afecb367f032d93F642f64180aa3 :nonce 1
  // console.log(await _deploy.deployV1());
  const _reponse = await _deploy.deployWithYul();
  const _receipt = await _reponse.wait();
  //console.log(ethers.keccak256(ethers.toUtf8Bytes("ContractCreated(address)"))); index0 是什么
  console.log(_receipt.logs[0].topics[1]);
  const _demo = await ethers.getContractAt(
    "Demo",
    "0x" + _receipt.logs[0].topics[1].substring(26)
  );
  console.log(await _demo.i());
}

show();
