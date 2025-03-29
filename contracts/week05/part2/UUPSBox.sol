// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
contract BoxV1UUPS is UUPSUpgradeable{

  uint public  x;
    function initialize(uint _val) public  {
        x = _val; // set initial value in initializer
    }

    function _authorizeUpgrade(address newImplementation)   internal override {
      
    }
    function cal() external    {
         x=x+1;
    }
 
}


// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
contract BoxV2UUPS  is  UUPSUpgradeable {

    uint public  x;
    function cal() external {
         x=x*2;
    }

   function _authorizeUpgrade(address newImplementation)   internal override {
      
    }


}