//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;
contract ArrayStorage{


    uint128 a=111;
    uint128 d=111;
    uint256 c=123;

    mapping(uint=>uint) test;
    uint[] intArray;
    //
    constructor(){
        test[2]=4;
        intArray.push(2);
        intArray.push(3);

    }

    function getArraySlot(uint256 slot) external pure returns(uint256){
        return uint256(keccak256(abi.encode(slot)));
    }
    function retreiveSlotContent(uint256 index) external view returns(bytes32 content){
        assembly{
            content:=sload(index)
        }

  }

}