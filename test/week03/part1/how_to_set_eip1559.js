const { ethers } = require("hardhat");

async function execute() {
  const _contract = await ethers.getContractFactory("Demo");
  const demo = await _contract.deploy(1);
  await demo.waitForDeployment();
  let tx = await demo.inc();
  let recipt = await tx.wait();
  console.log(recipt);
  console.log(await demo.i());
  let feedData = await ethers.provider.getFeeData();
  tx = await demo.inc({
    maxPriorityFeePerGas: feedData.maxPriorityFeePerGas * 5n,
  });
  recipt = await tx.wait();
  console.log(recipt);
  console.log(await demo.i());
}
execute();
