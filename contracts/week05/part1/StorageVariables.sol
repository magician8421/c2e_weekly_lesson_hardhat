
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract StorageVariables {
    uint256 public x; // Uninitialized storage variable

    function return_uninitialized_X() public view returns (uint256) {
        return x; // returns zero
    }
    function set_x(uint256 value) external {
       x = value;
    }
    function retreiveSlotContent(uint256 index) external view returns(bytes32 content){
        assembly{
            content:=sload(index)
        }
    }
}