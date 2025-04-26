const {
  bytecode,
} = require("../../../artifacts/contracts/week02/part2/create_vs_create2_FactoryV2.sol/Demo2.json");
async function predict() {
  const from = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const salt = 2024;

  const initCodeHash = ethers.keccak256(
    bytecode +
      ethers.AbiCoder.defaultAbiCoder().encode(["uint256"], [300]).substring(2)
  );
  //  console.log(initCodeHash);
  console.log(
    "predictoffline" +
      ethers.getCreate2Address(
        from,
        ethers.AbiCoder.defaultAbiCoder().encode(["uint256"], [2024]),
        initCodeHash
      )
  );
}

predict();
