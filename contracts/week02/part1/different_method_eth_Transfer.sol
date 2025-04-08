// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";

contract Called{
    function balance() external view  returns(uint256){
        return address(this).balance;
    }

}


contract Caller{


    address payable  called;

    constructor(address payable to){
        called=to;
    }

    function sender() external payable {

    }

    function transfer() external payable{

    }

    function call() external payable{

    }
}

