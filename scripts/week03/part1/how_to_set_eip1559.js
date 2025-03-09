const { ethers } = require("hardhat");

/**
 * 需要关闭automine模式
 */
async function execute() {
  const _contract = await ethers.getContractFactory("Demo");
  const demo = await _contract.deploy(1);
  await demo.waitForDeployment();
  let tx1 = await demo.inc(1);

  let feedData = await ethers.provider.getFeeData();
  let tx2 = await demo.inc(2, {
    maxPriorityFeePerGas: feedData.maxPriorityFeePerGas * 5n,
  });

  let recipt = await tx2.wait();
  console.log(recipt);
  recipt = await tx1.wait();
  console.log(recipt);
}
execute();
