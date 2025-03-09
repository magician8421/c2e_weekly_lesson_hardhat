// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract Demo{
    uint256 public i;
    constructor(uint256 _i){
        i=_i;
    }

    function inc(uint tag) external{
        console.log(tag);
        i++;
    }
}