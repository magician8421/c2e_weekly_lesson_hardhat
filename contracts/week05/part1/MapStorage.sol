//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;


contract MapStorage{


    uint128 a=111;
    uint128 d=111;
    uint256 c=123;

    mapping(uint=>uint) test;
    //
    constructor(){
        test[2]=4;
        test[135]=200;
    }

   function queryMapSlot(uint key,uint slot) external pure returns(uint256 location){
        location=uint256(keccak256(abi.encode(key,slot)));
    }

    function retreiveSlotContent(uint256 index) external view returns(bytes32 content){
        assembly{
            content:=sload(index)
        }

  }

}