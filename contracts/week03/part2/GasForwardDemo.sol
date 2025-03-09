// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";

contract GasLeft{


    uint256 value;

    Reciver private   r  ;

    constructor(Reciver _r){
        r=_r;
    }

    function sendEther() external  payable {
        
       payable(address(r)).transfer(msg.value);
    // (bool result,) = address(r).call{value:msg.value,gas:2300}("");
    // require(result);
        
    }
}

contract Reciver{
    receive() external payable { 
      //  console.logUint(gasleft());
    }
}