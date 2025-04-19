// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "./PureView.sol";
contract SubPureView is PureView{
    //默认是internal
    function test() view external {
        console.log(_var);
    }
}