// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "hardhat/console.sol";

contract TestAbiEncode{

// 0x04d2
// 0x1234
// 0x31323334
     function testAbiEncodePacked() pure external {
        console.logBytes(abi.encodePacked(uint16(1234)));
        console.logBytes(abi.encodePacked(bytes2(0x1234)));
        console.logBytes(abi.encodePacked("1234"));
    }

// 0x00000000000000000000000000000000000000000000000000000000000004d2
// 0x0000000000000000000000000000000000000000000000000000000000001234
// 0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000043132333400000000000000000000000000000000000000000000000000000000
   function testAbiEncode() pure external {
        console.logBytes(abi.encode(uint16(1234)));
        console.logBytes(abi.encode(0x1234));
        console.logBytes(abi.encode("1234"));
    }


// 0x00000000000000000000000000000000000000000000000000000000000004d2000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000043132333400000000000000000000000000000000000000000000000000000000
// 0x04d231323334
     function testAbiEncodeCombined() pure external {
        console.logBytes(abi.encode(1234,"1234"));
        console.logBytes(abi.encodePacked(uint16(1234),"1234"));

    }

    function testAbiDecode() pure external {
        bytes memory _encode=abi.encode(1234,"1234");
        (uint256 u,string memory s)=abi.decode(_encode,(uint256,string));
        console.logUint(u);
        console.logString(s);

        //  _encode=abi.encodePacked(uint16(1234),"1234");
        // (uint256 u2,string memory s2)=abi.decode(_encode,(uint256,string));
        // console.logUint(u2);
        // console.logString(s2);
    }

    function testAbiMethod(uint a,bytes2 b) external {

    }

    //函数签名=函数名+完整的参数定义
    function testAbiSignature() pure external {
        console.logBytes(abi.encodeWithSignature("testAbiMethod(uint256,bytes2)",1,bytes2(0x1234)));
    }
    //selector=bytes4(kaccake246(函数签名))
    function testAbiSeletor() pure external {

        console.logBytes(abi.encodeWithSelector(TestAbiEncode.testAbiMethod.selector,1,bytes2(0x1234)));
        //selector
        bytes4 _selector=bytes4(keccak256("testAbiMethod(uint256,bytes2)"));
        //argument
        console.logBytes(abi.encodePacked(_selector,abi.encode(1,bytes2(0x1234))));
    }

    //根据调用进行编码
    function testAbiCall() pure external{
         console.logBytes(abi.encodeCall(TestAbiEncode.testAbiMethod,(1,0x1234)));
    }

}
