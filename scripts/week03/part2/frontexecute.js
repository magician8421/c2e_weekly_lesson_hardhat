const { ethers } = require("hardhat");
const { expect } = require("chai");

/**
 * 运行此程序记住关闭hardhat automin能力
 */

async function demostrateFrontRunning() {
  let frontRunningDemoContract = await ethers.getContractFactory(
    "FrontRunningDemo"
  );
  let frontRunningDemo = await frontRunningDemoContract.deploy();
  await frontRunningDemo.waitForDeployment();
  let [owner, attacker] = await ethers.getSigners();

  // User A prepares a transaction
  const ownerAmount = ethers.parseUnits("20", "ether");

  // Attacker B observes User A's transaction and prepares their own transaction
  const attackerAmount = ethers.parseUnits("100", "ether");

  // Attacker B front-runs User A

  // User A submits their transaction, which should fail

  try {
    let tx1 = await frontRunningDemo
      .connect(owner)
      .submitTransaction(ownerAmount, {
        maxPriorityFeePerGas: 1000000,
      });

    let tx2 = await frontRunningDemo
      .connect(attacker)
      .submitTransaction(attackerAmount, {
        maxPriorityFeePerGas: 3000000,
      });

    await tx1.wait();
    await tx2.wait();
    throw new Error("Owner's transaction did not fail as expected");
  } catch (error) {
    if (
      error.message.includes("Owner's transaction did not fail as expected")
    ) {
      throw error;
    } else {
      console.log("Owner's transaction failed as expected");
    }
  }

  // Check order of transactions
  const transactions = await frontRunningDemo.getTransactions();
  console.log(transactions.length);
  console.log(transactions[0].user); // Only attacker's transaction should have succeeded
}
