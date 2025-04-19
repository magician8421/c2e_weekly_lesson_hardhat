const hre = require("hardhat");
const ethers = require("ethers");
const _contract = await ethers.getContractFactory("Factory");
const _deploy = await _contract.deploy();
await _deploy.waitForDeployment();
console.log(await _deploy.getAddress());
