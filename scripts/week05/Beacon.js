const hre = require("hardhat");
async function deploy() {
  //V1版本工厂
  const BOXV1 = await hre.ethers.getContractFactory("BoxV1");

  //通过V1版本部署代理
  const beacon = await hre.upgrades.deployBeacon(BOXV1);
  await beacon.waitForDeployment();

  const proxy = await hre.upgrades.deployBeaconProxy(beacon, BOXV1, [1]);
  await proxy.waitForDeployment();

  console.log(await proxy.getAddress());
  console.log(await proxy.x());
  await proxy.cal();
  console.log(await proxy.x());

  const BOXV2 = await hre.ethers.getContractFactory("BoxV2");
  await hre.upgrades.upgradeBeacon(await beacon.getAddress(), BOXV2);

  console.log(await proxy.getAddress());
  console.log(await proxy.x());
  await proxy.cal();
  console.log(await proxy.x());
}

deploy();
