const { ethers } = require("hardhat");

async function showGas() {
  console.log(await ethers.provider.getFeeData());
}
showGas();
