// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";

contract Called{
    function balance() external view  returns(uint256){
        return address(this).balance;
    }
    receive() external payable { 
        console.log(address(this));
    }
}


contract Caller{


    address payable  called;

    constructor(address payable to){
        called=to;
    }

    function sender() external payable {
        bool result=called.send(3);
        require(result);
    }

    function transfer() external payable{
        called.transfer(3);
    }

    function call() external payable{
       (bool result,bytes memory data)=called.call{value:3}("");
       require(result);
    }
}

