// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "hardhat/console.sol";

contract Exception{

    error MustGreaterThanError(uint256 a);

    function testRequire(uint a) external pure {
        require(a>0,"a need be greater than zero");
    }

    function testRevert(uint a) external pure {
        if(a<=0){
            revert MustGreaterThanError(a);
        }
    }
   function testRevertWithStr(uint a) external pure {
        if(a<=0){
            revert("a need be greater than zero");
        }
    }

    function testAssert(uint a) external pure{
        assert(a>0);
    }
}