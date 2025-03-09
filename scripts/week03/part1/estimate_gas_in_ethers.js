const hre = require("hardhat");

async function estimateGas() {
  let gasTest;
  const GasTest = await hre.ethers.getContractFactory("GasLimitTest");
  gasTest = await GasTest.deploy();
  gasTest.waitForDeployment();

  console.log(await gasTest.execute.estimateGas());
  console.log(await gasTest.setter.estimateGas(3));
}

estimateGas();
