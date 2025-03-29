// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract ImmutableVariables {
    uint256 constant myConstant = 100;
    uint256 immutable myImmutable;

    constructor(uint256 _myImmutable) {
        myImmutable = _myImmutable;
    }

    function access() public  returns (uint256) {
        return myConstant+1;
    }
}