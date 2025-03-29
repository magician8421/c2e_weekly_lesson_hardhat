const hre = require("hardhat");
async function deploy() {
  //V1版本工厂
  const _UUPSV1 = await hre.ethers.getContractFactory("BoxV1UUPS");
  //V2版本工厂
  const _UUPSV2 = await hre.ethers.getContractFactory("BoxV2UUPS");

  //通过V1版本部署代理
  const v1 = await hre.upgrades.deployProxy(_UUPSV1, [1], {
    initializer: "initialize",
    kind: "uups",
  });
  await v1.waitForDeployment();

  console.log(await v1.getAddress());
  console.log(await v1.x());
  await v1.cal();
  console.log(await v1.x());

  //升级成V2版本
  await hre.upgrades.upgradeProxy(await v1.getAddress(), _UUPSV2);
  console.log(await v1.x());
  await v1.cal();
  console.log(await v1.x());
}

deploy();
