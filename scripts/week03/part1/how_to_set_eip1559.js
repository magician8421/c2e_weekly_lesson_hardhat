const { ethers } = require("hardhat");

/**
 * 需要关闭automine模式
 */
async function execute() {
  const _contract = await ethers.getContractFactory("Demo");
  const demo = await _contract.deploy();
  await demo.waitForDeployment();
  let feedData = await ethers.provider.getFeeData();
  let tx1 = await demo.set(1, {
    maxPriorityFeePerGas: 1000000,
  });

  let tx2 = await demo.set(2, {
    maxPriorityFeePerGas: 3000000,
  });

  let receipt2 = await tx2.wait();
  console.log(receipt2);
  let receipt1 = await tx1.wait();
  console.log(receipt1);
  console.log(await demo.tag());
  console.log("tx1 block number:", receipt1.blockNumber);
  console.log("tx2 block number:", receipt2.blockNumber);
}
execute();
