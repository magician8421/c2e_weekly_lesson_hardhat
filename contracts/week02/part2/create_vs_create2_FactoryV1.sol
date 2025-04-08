// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";
contract Factory{
    event ContractCreated(address);
    function deployWithNew() external {
        console.logAddress(address(new Demo(300)));
    }

    function deployWithYul() external {
         bytes memory _bytes=abi.encodePacked(type(Demo).creationCode,abi.encode(300));
        address deployAddress;
        assembly{
            deployAddress:=create(callvalue(),add(_bytes,0x20),mload(_bytes))
        }
        console.log(deployAddress);
        emit ContractCreated(deployAddress);
    }
}

contract Demo{
    uint256 public i;
    constructor(uint256 _i){
        i=_i;
    }
}