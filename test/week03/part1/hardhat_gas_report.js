const hre = require("hardhat");

describe("GasGolf", function () {
  it("V1", async function () {
    let GasGolf = await hre.ethers.getContractFactory("GasGolf");
    gasGolf = await GasGolf.deploy();
    await gasGolf.waitForDeployment();
    await gasGolf.sumIfEvenAndLessThan99V1([1, 2, 3, 4, 5, 100]);
    await gasGolf.sumIfEvenAndLessThan99V2([1, 2, 3, 4, 5, 100]);
  });
  //   it("V2", async function () {
  //     gasGolf.sumIfEvenAndLessThan99V1([1, 2, 3, 4, 5, 100]);
  //   });
});
