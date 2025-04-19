// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "hardhat/console.sol";
contract Parent{
      uint256  public i;
      constructor(){
               console.log("parent()");
      }
}
contract Base1 is Parent
{
    constructor(){
        console.log("Base1()");
    }
    function foo() virtual   public {
        i=i+2;
        console.log("foo1()");
    }
}

contract Base2 is Parent
{
    constructor(){
        console.log("Base2()");
    }
    function foo() virtual public {
         i=i*2;
         console.log("foo2()");
    }
}

contract Inherited is Base2, Base1
{
    // Derives from multiple bases defining foo(), so we must explicitly
    // override it
    //rsult 2 0+2
    function foo() override(Base2,Base1)  public {
        console.log("foo()");
        super.foo();
    }
}