const hre = require("hardhat");

describe("GAS TEST", function () {
  let gasTest;
  this.beforeEach(async function () {
    const GasTest = await hre.ethers.getContractFactory("GasLimitTest");
    gasTest = await GasTest.deploy();
    gasTest.waitForDeployment();
  });
  it("estimate no params", async function () {
    console.log(await gasTest.execute.estimateGas());
  });
  it("estimate with params", async function () {
    console.log(await gasTest.setter.estimateGas(3));
  });
});
