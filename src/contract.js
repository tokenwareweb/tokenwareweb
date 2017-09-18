export default {
    address: '0xDE8Cb3d083CEcFD839c9318cB493A91C67fB8033',

    abi: [{
        "constant": true,
        "inputs": [],
        "name": "getVersion",
        "outputs": [{
            "name": "",
            "type": "uint256",
            "value": "1"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "issueAssignedTo",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x0000000000000000000000000000000000000000"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "close",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "issueEscrow",
        "outputs": [{
            "name": "",
            "type": "uint256",
            "value": "0"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "issueValue",
        "outputs": [{
            "name": "",
            "type": "uint256",
            "value": "0"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "issueId",
            "type": "uint256"
        }],
        "name": "claimIssue",
        "outputs": [],
        "payable": true,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0xacdb4de376d0ada8d221f51d31d544696927bb49"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "issueId",
            "type": "uint256"
        }, {
            "name": "reason",
            "type": "uint256"
        }],
        "name": "completeIssue",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "issueId",
            "type": "uint256"
        }],
        "name": "getIssue",
        "outputs": [{
            "name": "value",
            "type": "uint256",
            "value": "0"
        }, {
            "name": "escrow",
            "type": "uint256",
            "value": "0"
        }, {
            "name": "assignedTo",
            "type": "address",
            "value": "0x"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "issueId",
            "type": "uint256"
        }],
        "name": "addIssue",
        "outputs": [],
        "payable": true,
        "type": "function"
    }, {
        "payable": false,
        "type": "fallback"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "issueId",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "value",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "escrow",
            "type": "uint256"
        }],
        "name": "AddIssue",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "issueId",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "assignedTo",
            "type": "address"
        }],
        "name": "ClaimIssue",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "issueId",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "value",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "escrow",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "assignedTo",
            "type": "address"
        }],
        "name": "FixedIssue",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "issueId",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "value",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "escrow",
            "type": "uint256"
        }, {
            "indexed": false,
            "name": "assignedTo",
            "type": "address"
        }],
        "name": "NotFixedIssue",
        "type": "event"
    }],
}