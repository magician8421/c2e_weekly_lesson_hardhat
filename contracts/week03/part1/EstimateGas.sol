
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract EstimateGasCost{
    uint i;
    function estimateGasCost(uint256 data) external {
        uint256 gasStart = gasleft();
        // Execute the operation that consumes gas
        i++;
        i=i*data;
        for(uint j=0;j<i;j++){
            
        }
        // ...
        uint256 gasSpent = gasStart - gasleft();
        uint256 gasFee= gasSpent * tx.gasprice;
        console.log(gasFee);
    }
}