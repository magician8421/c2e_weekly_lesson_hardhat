// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract SlotReadStorage {

    uint256 public x = 11;
    uint256 public y = 22;
    uint256 public z = 33;

    function readSlotX() external view returns (uint256 value) {
        assembly {
            value := sload(x.slot)
        }
    }

    function sloadOpcode(uint256 slotNumber)
        external
        view
        returns (uint256 value){
        assembly {
            value := sload(slotNumber)
        }
    }
}