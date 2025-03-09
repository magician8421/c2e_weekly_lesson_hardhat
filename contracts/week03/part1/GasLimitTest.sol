// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract GasLimitTest{
    uint256 i;
   function execute() external{
     (bool r,bytes memory data) =address(0).call{gas:5000}("");
     require(r);
   }

   function setter(uint256 _i) external{
        i=_i;
   } 
}