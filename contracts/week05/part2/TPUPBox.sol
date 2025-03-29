// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
contract BoxV1 {

  uint public  x;
    function initialize(uint _val) public  {
        x = _val; // set initial value in initializer
    }
    function cal() external    {
         x=x+1;
    }
 
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract BoxV2 {

    uint public  x;
    function cal() external {
         x=x*2;
    }


}