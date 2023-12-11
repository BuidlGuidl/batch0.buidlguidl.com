//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BatchRegistry is Ownable {

	uint256 constant CHECK_IN_REWARD = 0.01 ether;

	mapping(address => bool) public allowList;
	mapping(address => address) public yourContractAddress;
	bool public isOpen = true;
	uint256 public checkedInCounter;

	event CheckedIn(bool first, address builder, address checkInContract);

	// Errors
	error BatchNotOpen();
	error NotAContract();
	error NotInAllowList();


	modifier batchIsOpen() {
		if (!isOpen) revert BatchNotOpen();
		_;
	}

	modifier senderIsContract() {
		if (tx.origin == msg.sender) revert NotAContract();
		_;
	}

	constructor(address initialOwner) {
		super.transferOwnership(initialOwner);
	}

	function updateAllowList(address[] calldata builders, bool[] calldata statuses) public onlyOwner {
		require(builders.length == statuses.length, "Builders and statuses length mismatch");

		for (uint i = 0; i < builders.length; i++) {
			allowList[builders[i]] = statuses[i];
		}
	}

	function toggleBatchOpenStatus() public onlyOwner {
		isOpen = !isOpen;
	}

	function checkIn() public senderIsContract batchIsOpen {
		if (!allowList[tx.origin]) revert NotInAllowList();

		bool wasFirstTime;
		if (yourContractAddress[tx.origin] == address(0)) {
			checkedInCounter++;
			wasFirstTime = true;
			(bool success, ) = tx.origin.call{value: CHECK_IN_REWARD}("");
			require(success, "Failed to send check in reward");
		}

		yourContractAddress[tx.origin] = msg.sender;
		emit CheckedIn(wasFirstTime, tx.origin, msg.sender);
	}

	receive() external payable {}
}
