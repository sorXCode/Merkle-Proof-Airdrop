//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol"

contract BoredApeToken is ERC20 {
    bytes32 merkleRoot;
    mapping(address => bool) public claimed;

    constructor(bytes32 memory _merkleRoot) ERC20("Sorxcode", "SXX"){
        _mint(msg.sender, 1 ether);
        merkleRoot = _merkleRoot;
    }

    function claim(bytes32[] memory _merkleProof) public {
        require(!claimed[msg.sender], "Address already claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Invalid Proof");
        claimed[msg.sender] = true;
        _mint(msg.sender, 1000000000);
        
    }

}