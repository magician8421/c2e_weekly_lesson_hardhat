const hre = require("hardhat");
async function deploy() {
  //V1版本工厂
  const BOXV1 = await hre.ethers.getContractFactory("BoxV1");

  //通过V1版本部署代理
  const v1 = await hre.upgrades.deployProxy(BOXV1, [1], {
    initializer: "initialize",
  });
  await v1.waitForDeployment();

  console.log(await v1.getAddress());
  console.log(await v1.x());
  await v1.cal();
  console.log(await v1.x());

  const BOXV2 = await hre.ethers.getContractFactory("BoxV2");
  const v2 = await hre.upgrades.upgradeProxy(await v1.getAddress(), BOXV2);
  await v2.waitForDeployment();
  console.log(await v2.getAddress());
  console.log(await v2.x());
  await v2.cal();
  console.log(await v2.x());
}

deploy();
