const hre = require("hardhat");

describe("GAS LIMIT TEST", function () {
  let gasTest;
  this.beforeEach(async function () {
    const GasTest = await hre.ethers.getContractFactory("GasLimitTest");
    gasTest = await GasTest.deploy();
    gasTest.waitForDeployment();
  });
  it("execute", async function () {
    const options = { gasLimit: 21064 };
    try {
      await gasTest.execute(options);
    } catch (e) {
      e.message.includes("Transaction ran out of gas");
    }
  });
});
