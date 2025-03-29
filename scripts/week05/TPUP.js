const hre = require("hardhat");
async function deploy() {
  //V1版本工厂
  const BOXV1 = await hre.ethers.getContractFactory("BoxV1");

  //通过V1版本部署代理
  const v1 = await hre.upgrades.deployProxy(BOXV1, [1], {
    initializer: "initialize",
  });
  await v1.waitForDeployment();

  const logicAddress = await hre.upgrades.erc1967.getImplementationAddress(
    await v1.getAddress()
  );
  const adminAddress = await hre.upgrades.erc1967.getAdminAddress(
    await v1.getAddress()
  );
  console.log("logicAddress=>", logicAddress);
  console.log("adminAddress=>", adminAddress);
  console.log(await v1.getAddress());
  console.log(await v1.x());
  await v1.cal();
  console.log(await v1.x());

  let [signer1, signer2] = await hre.ethers.getSigners();
  const BOXV2 = await hre.ethers.getContractFactory("BoxV2", {
    signer: signer1,
  });
  const v2 = await hre.upgrades.upgradeProxy(await v1.getAddress(), BOXV2);
  await v2.waitForDeployment();
  console.log(await v2.getAddress());
  console.log(await v2.x());
  await v2.cal();
  console.log(await v2.x());
}

deploy();
