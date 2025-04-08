// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";

contract Called{
     uint256 public number;
    function inc() external {
        ++number;
    }

    function setN(uint256 _number) external returns(uint256){
        number=_number;
        return number;
    }

}
//EOA->CALLER->CALLED
contract Caller{
    uint256 public number;
    address to;
    constructor(address _to){
        to=_to;
    }

    
    function inc() external {

    }


    function setN(uint256 _number) external {

    }

    function delegateSetN(uint256 _number) external {

    }
     function staticSetN() view external {

    }
}