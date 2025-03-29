// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract StoragePackaged {
    address owner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    // new
    bool Boolean = true;
    uint32 thirdvar = 5_000_000;
    function retreiveSlotContent(uint256 index) external view returns(bytes32 content){
        assembly{
            content:=sload(index)
        }
    }
}