//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract SorxcodeToken is ERC20 {
    bytes32 merkleRoot;
    mapping(address => bool) public claimed;
    address public owner;

    constructor(bytes32 _merkleRoot) ERC20("Sorxcode", "SXX"){
        merkleRoot = _merkleRoot;
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender==owner, "Access Denied");
        _;
    }

    function updateMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function claim(bytes32[] memory _merkleProof) public {
        require(!claimed[msg.sender], "Address already claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Invalid Proof");
        claimed[msg.sender] = true;
        _mint(msg.sender, 1 ether);
        
    }

}