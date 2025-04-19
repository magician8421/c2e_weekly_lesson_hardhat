const hre = require("hardhat");
const ethers = require("ethers");

function convertPBK(privateKey) {
  const keyPair = new ethers.SigningKey(privateKey);
  console.log(keyPair.publicKey);
  return keyPair.publicKey;
}

function computeAddress(privateKey) {
  const pbk = convertPBK(privateKey);
  const address =
    "0x" + ethers.keccak256("0x" + pbk.substring(4)).substring(26);
  console.log(address);
  console.log(ethers.computeAddress(pbk));
}
