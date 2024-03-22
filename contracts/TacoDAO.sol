// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TacoDAO {
    struct Proposal {
        string description;
        address payable recipient;
        uint256 value;
        bool executed;
        uint256 votes;
    }

    address public chairperson;
    mapping(address => uint256) public balances;
    Proposal[] public proposals;

    modifier onlyChairperson {
        require(msg.sender == chairperson, "Not authorized.");
        _;
    }

    constructor() {
        chairperson = msg.sender;
    }

    function contribute() external payable {
        require(msg.value > 0, "Contribution must be non-zero.");
        balances[msg.sender] += msg.value;
    }

    function createProposal(string memory description, address payable recipient, uint256 value) public onlyChairperson {
        proposals.push(Proposal({
            description: description,
            recipient: recipient,
            value: value,
            executed: false,
            votes: 0
        }));
        emit ProposalCreated(description, recipient, value);
    }

    function vote(uint256 proposalIndex) public {
        Proposal storage proposal = proposals[proposalIndex];
        require(balances[msg.sender] > 0, "Must be a contributor to vote.");
        require(!proposal.executed, "Proposal already executed.");
        
        proposal.votes += balances[msg.sender];
        emit VoteCasted(msg.sender, proposalIndex, balances[msg.sender]);
    }

    function executeProposal(uint256 proposalIndex) public onlyChairperson {
        Proposal storage proposal = proposals[proposalIndex];
        require(proposal.votes > 100 ether, "Not enough votes.");
        require(address(this).balance >= proposal.value, "Insufficient balance.");
        require(!proposal.executed, "Proposal already executed.");

        proposal.executed = true;
        proposal.recipient.transfer(proposal.value);
        emit ProposalExecuted(proposalIndex);
    }

    event ProposalCreated(string description, address recipient, uint256 value);
    event VoteCasted(address voter, uint256 proposalIndex, uint256 amount);
    event ProposalExecuted(uint256 proposalIndex);
}