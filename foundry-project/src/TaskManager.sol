//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;

contract TaskManager {

    error notOwner();

    struct Task {
        bytes task;
        bool completed;
        address owner;
        uint256 id;
    }

    mapping(uint256 => Task) public tasks;
    mapping(address => uint256[]) public ownerToTaskIds;

    //CRUD functions
    function add(bytes memory _task) public { 
        uint256 hashId = uint256(keccak256(abi.encode(_task, msg.sender)));
        Task memory task = Task(_task, false, msg.sender, hashId);
        tasks[hashId] = task;
        ownerToTaskIds[msg.sender].push(hashId);
        emit taskAdded(msg.sender, _task, hashId);
    }

    function marking(uint256 _taskId) public {
        require(tasks[_taskId].owner == msg.sender, notOwner());
        tasks[_taskId].completed = !tasks[_taskId].completed;
        emit MarkingChanged(_taskId);
    }

    function editing(uint256 _taskId, bytes memory _newTask) public {
        require(tasks[_taskId].owner == msg.sender, notOwner());
        tasks[_taskId].task = _newTask;
        emit taskEdited(_taskId, _newTask);
    }

    function deleting(uint256 _taskId) public {
        require(tasks[_taskId].owner == msg.sender, notOwner());
        delete tasks[_taskId];
        findTaskIdIndexAndDelete(_taskId);
        emit taskDeleted(_taskId);
    }

    function fetching() public view returns(Task[] memory) {
        uint256[] memory idArray = ownerToTaskIds[msg.sender];
        uint256 validCount = 0;
        uint256 size = idArray.length;

        for (uint256 i = 0; i < size; i++) {
            if (idArray[i] != 0) {
                validCount++;
            }
        }

        Task[] memory fetchedTasks = new Task[](validCount);
        uint256 index = 0;

        for (uint256 i = 0; i < size; i++) {
            if (idArray[i] != 0) {
                fetchedTasks[index] = tasks[idArray[i]];
                index++;
            }
        }
        return fetchedTasks;
    }

    //Helper Function
    function findTaskIdIndexAndDelete(uint256 _taskId) internal {
        uint256[] memory idArray = ownerToTaskIds[msg.sender];
        uint256 size = idArray.length;

        for (uint256 i = 0; i < size; i++) {
            if (idArray[i] == _taskId) {
                idArray[i] = 0;
            }
        }

        ownerToTaskIds[msg.sender] = idArray;
        
    }

    event taskAdded(address indexed _from, bytes _task, uint256 _taskId);
    event MarkingChanged(uint256 indexed _taskId);
    event taskEdited(uint256 indexed _taskId, bytes _newTask);
    event taskDeleted(uint256 indexed _taskId);
}
