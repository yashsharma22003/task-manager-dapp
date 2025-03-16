// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

import { Test } from "forge-std/Test.sol";
import { Script, console } from "forge-std/Script.sol";
import "../src/TaskManager.sol";

contract TaskManagerTest is Test, Script {
    TaskManager taskManager;
    address owner = address(1);
    address addr1 = address(2);
    bytes sampleTask = "Sample Task";
    bytes updatedTask = "Updated Task";

    function setUp() public {
        vm.prank(owner);
        taskManager = new TaskManager();
    }

    function testAddTask() public {
        vm.prank(owner);
        taskManager.add(sampleTask);
        vm.prank(owner);
        TaskManager.Task[] memory tasks = taskManager.fetching();
        assertEq(tasks.length, 1);
        assertEq(tasks[0].task, sampleTask);
        assertEq(tasks[0].completed, false);
    }

    function testMarkTask() public {
    vm.prank(owner);
    taskManager.add(sampleTask);
    uint256 taskId = uint256(keccak256(abi.encode(sampleTask, owner)));

    vm.prank(owner);
    taskManager.marking(taskId);

    vm.prank(owner);
    TaskManager.Task[] memory tasks = taskManager.fetching();

    assertEq(tasks.length, 1);
    assertEq(tasks[0].completed, true);
}

    function testEditTask() public {
    vm.prank(owner);
    taskManager.add(sampleTask);
    uint256 taskId = uint256(keccak256(abi.encode(sampleTask, owner)));

    vm.prank(owner);
    taskManager.editing(taskId, updatedTask);

    vm.prank(owner);  
    TaskManager.Task[] memory tasks = taskManager.fetching();
    
    assertEq(keccak256(tasks[0].task), keccak256(updatedTask));
}

    function testDeleteTask() public {
        vm.prank(owner);
        taskManager.add(sampleTask);
        uint256 taskId = uint256(keccak256(abi.encode(sampleTask, owner)));

        vm.prank(owner);
        taskManager.deleting(taskId);

        TaskManager.Task[] memory tasks = taskManager.fetching();
        assertEq(tasks.length, 0);
    }

    function testOnlyOwnerCanModify() public {
        vm.prank(owner);
        taskManager.add(sampleTask);
        uint256 taskId = uint256(keccak256(abi.encode(sampleTask, owner)));

        vm.prank(addr1);
        vm.expectRevert(TaskManager.notOwner.selector);
        taskManager.marking(taskId);

        vm.prank(addr1);
        vm.expectRevert(TaskManager.notOwner.selector);
        taskManager.editing(taskId, updatedTask);

        vm.prank(addr1);
        vm.expectRevert(TaskManager.notOwner.selector);
        taskManager.deleting(taskId);
    }
}
