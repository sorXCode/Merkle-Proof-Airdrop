// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Demo {
    string public secret = "this-is-super-secret";
    address public owner = 0xb72bcDB778A271A36D445CcEc51d251c9D385dfc;

    function setSecret(string memory _s) public {
        secret = _s;
    }
}