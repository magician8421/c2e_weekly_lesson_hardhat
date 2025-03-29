// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract WriteStorage {
    uint256 public x = 11;
    uint256 public y = 22;
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    // sstore() function

    function sstore_x(uint256 newval) public {
        assembly {
            sstore(x.slot, newval)
        }
    }

    // normal function
    function set_x(uint256 newval) public {
        x = newval;
    }
}