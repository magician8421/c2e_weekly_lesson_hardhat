const hre = require("hardhat");

describe("GAS LIMIT TEST", function () {
  let gasTest;
  this.beforeEach(async function () {
    const GasTest = await hre.ethers.getContractFactory("GasLimitTest");
    gasTest = await GasTest.deploy();
    gasTest.waitForDeployment();
  });

  it("execute", async function () {
    await gasTest.execute({ gasLimit: 81064 });
  });
});
