import { encodeBytes32String } from 'ethers';
import contractInstance from './contractInstance';

export async function addTask(task) {
    try {
        console.log("Adding task", task);
        const taskToBytes = encodeBytes32String(task);
        const contract = await contractInstance();
        const tx = await contract.add(taskToBytes);
        const receipt = await tx.wait();
        if(receipt.status === 1) {
            console.log("Task added successfully");
            return true;
        }
        else {
            console.log("Task not added");
            return false;
        }
    }
    catch(e){
        console.error("Error while adding task",e);
    }
}

export async function fetchTasks() {
    try {
        const contract = await contractInstance();
        const tasks = await contract.fetching();
        console.log("fetched tasks",tasks);
        return tasks;
    }
    catch(e){
        console.error("Error while fetching tasks",e);
    }
}

export async function deleteTask(taskId) {
    try {
        console.log("Deleting task", taskId);
        const contract = await contractInstance();
        const tx = await contract.deleting(taskId);
        const receipt = await tx.wait();
        if(receipt.status === 1) {
            console.log("Task deleted successfully");
            return true;
        }
        else {
            console.log("Task not deleted");
            return false;
        }
    }
    catch(e){
        console.error("Error while deleting task",e);
    }
}

export async function editTask(taskId, task) {
    try {
        console.log("Editing task", task);
        const taskToBytes = encodeBytes32String(task);
        const contract = await contractInstance();
        const tx = await contract.editing(taskId, taskToBytes);
        const receipt = await tx.wait();
        if(receipt.status === 1) {
            console.log("Task edited successfully");
            return true;
        }
        else {
            console.log("Task not edited");
            return false;
        }
    }
    catch(e){
        console.error("Error while editing task",e);
    }
}

export async function markTask(taskId) {
    try {
        console.log("Marking task", taskId);
        const contract = await contractInstance();
        const tx = await contract.marking(taskId);
        const receipt = await tx.wait();
        if(receipt.status === 1) {
            console.log("Task marked successfully");
            return true;
        }
        else {
            console.log("Task not marked");
            return false;
        }
    }
    catch(e){
        console.error("Error while marking task",e);
    }
}