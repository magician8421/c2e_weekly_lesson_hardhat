const { ethers } = require("hardhat");

/**
 * 需要关闭automine模式
 */
async function execute() {
  await network.provider.send("evm_setAutomine", [false]);
  const _contract = await ethers.getContractFactory("Demo");
  const demo = await _contract.deploy();
  await ethers.provider.send("evm_mine", []);
  await demo.waitForDeployment();
  let feedData = await ethers.provider.getFeeData();
  let tx1 = await demo.set(1, {
    maxPriorityFeePerGas: 1000000,
  });

  let tx2 = await demo.set(2, {
    maxPriorityFeePerGas: 3000000,
  });
  await ethers.provider.send("evm_mine", []);
  console.log(await tx1.wait());
  console.log(await tx2.wait());
  console.log(await demo.tag());
  console.log("tx1 block number:", (await tx1.wait()).blockNumber);
  console.log("tx2 block number:", (await tx2.wait()).blockNumber);
}
execute();
