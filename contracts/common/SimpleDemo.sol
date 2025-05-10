// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract SimpleDemo{
    uint256 public tag;
 

    function set(uint _tag) external{
        tag=_tag;
        console.log(tag);
    }
}