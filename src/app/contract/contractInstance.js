'use client'
import { Contract, BrowserProvider} from 'ethers'
 
async function contractInstance() {

    const abi = [
        {
            "inputs": [],
            "name": "notOwner",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                }
            ],
            "name": "MarkingChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_task",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                }
            ],
            "name": "taskAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                }
            ],
            "name": "taskDeleted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_newTask",
                    "type": "bytes"
                }
            ],
            "name": "taskEdited",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "_task",
                    "type": "bytes"
                }
            ],
            "name": "add",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                }
            ],
            "name": "deleting",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_newTask",
                    "type": "bytes"
                }
            ],
            "name": "editing",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fetching",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes",
                            "name": "task",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bool",
                            "name": "completed",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct TaskManager.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_taskId",
                    "type": "uint256"
                }
            ],
            "name": "marking",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ownerToTaskIds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tasks",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "task",
                    "type": "bytes"
                },
                {
                    "internalType": "bool",
                    "name": "completed",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const contractAddress = "0x47FE4d9E8c12eBC8fB775f612E2350bA6e5d2aBC";
    const signer = await getSigner();
    const contract = new Contract(contractAddress, abi, signer);
    return contract;

}

async function getSigner() {

    if(typeof window.ethereum !== 'undefined'){
        let provider = new BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        return signer;
    } else {
        prompt("Metamask not installed");
        return null;
    }

}

export default contractInstance;
