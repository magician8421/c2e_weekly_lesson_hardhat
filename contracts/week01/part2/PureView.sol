// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "hardhat/console.sol";
contract PureView{
 
     uint256 private _var;

    function showGlobalVar()  payable  external{

        console.log(msg.sender);
        console.log(block.timestamp);
        console.logUint(msg.value);


    }
    function notAccess(uint256 a,uint256 b) external pure returns(uint256){
        
        return a+b;
    }
		//这里不能是pure，因为msg.sender.balance就已经读取链上状态
    function notModifiy(uint256 a,uint256 b) external view returns(uint256){
        
        return a+b+msg.sender.balance;
    }
    
    function modifiyState() external  {
        _var++;
    }
    
}