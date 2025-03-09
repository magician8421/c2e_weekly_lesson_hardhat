const { ethers } = require("hardhat");
const { expect } = require("chai");

/**
 * 运行此程序记住关闭hardhat automin能力
 */

async function demostrateFrontRunning() {
  await network.provider.send("evm_mine"); // 手动挖矿
  let frontRunningDemoContract = await ethers.getContractFactory(
    "FrontRunningDemo"
  );
  let frontRunningDemo = await frontRunningDemoContract.deploy();
  await ethers.provider.send("evm_mine", []);
  await frontRunningDemo.waitForDeployment();
  let [owner, attacker] = await ethers.getSigners();

  // User A prepares a transaction
  const ownerAmount = ethers.parseUnits("20", "ether");

  // Attacker B observes User A's transaction and prepares their own transaction
  const attackerAmount = ethers.parseUnits("100", "ether");

  // Attacker B front-runs User A

  // User A submits their transaction, which should fail
  let tx1;
  let tx2;

  // Attacker B front-runs User A
  await frontRunningDemo.connect(attacker).submitTransaction(attackerAmount, {
    maxPriorityFeePerGas: 7000000,
  });

  // User A submits their transaction, which should fail
  try {
    await frontRunningDemo.connect(owner).submitTransaction(ownerAmount, {
      maxPriorityFeePerGas: 3000000,
    });
    // Mine all the transactions

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
  await ethers.provider.send("evm_mine", []);
  // Check order of transactions
  const transactions = await frontRunningDemo.getTransactions();
  console.log(transactions.length);
  console.log(attacker.address);
  console.log(transactions[0].user); // Only attacker's transaction should have succeeded
}
demostrateFrontRunning();
