pragma solidity ^0.5.8;

contract HelloWorld {

  string private name;
  mapping (address => uint256) public balance;

  constructor() public {
    name = "Filip";
    balance[msg.sender] = 1000;
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function setName(string memory _name) public {
    name = _name;
  }
}
