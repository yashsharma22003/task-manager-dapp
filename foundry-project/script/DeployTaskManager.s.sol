//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import { Script, console } from "forge-std/Script.sol";
import { TaskManager } from "src/TaskManager.sol";

contract DeployTaskManager is Script {
    function run() public {
        vm.startBroadcast();
        TaskManager taskManager = new TaskManager();
        vm.stopBroadcast();
        console.log("TaskManager deployed at address: ", address(taskManager));
    }
}