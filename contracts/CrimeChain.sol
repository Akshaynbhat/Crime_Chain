// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrimeChain {

    struct Case {
        uint id;
        string caseDescription;
        string evidenceHash;
        bool verified;
    }

    uint public caseCount = 0;
    mapping(uint => Case) public cases;

    event CaseCreated(uint id, string evidenceHash);
    event CaseVerified(uint id, bool status);

    function createCase(string memory _desc, string memory _hash) public {
        caseCount++;

        cases[caseCount] = Case(
            caseCount,
            _desc,
            _hash,
            false
        );

        emit CaseCreated(caseCount, _hash);
    }

    function verifyCase(uint _id, bool _status) public {
        cases[_id].verified = _status;

        emit CaseVerified(_id, _status);
    }

    function getCase(uint _id) public view returns (
        uint, string memory, string memory, bool
    ) {
        Case memory c = cases[_id];
        return (c.id, c.caseDescription, c.evidenceHash, c.verified);
    }
}