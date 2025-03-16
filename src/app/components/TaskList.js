import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { deleteTask, editTask, markTask } from "../contract/context";
import toast from "react-hot-toast";

const TaskList = ({ tasks, editTaskOnContract }) => {
    const [taskArray, setTaskArray] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const result = await tasks;
                const formattedTasks = Array.from(result).map((task, index) => {
                    let decodedTask = "Invalid Task";
                    try {
                        decodedTask = ethers.decodeBytes32String(task[0]);
                    } catch {
                        console.warn(`Failed to decode task at index ${index}`);
                    }
                    return {
                        task: decodedTask,
                        completed: task[1],
                        owner: task[2],
                        taskId: BigInt(task[3])
                    };
                });
                setTaskArray(formattedTasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        if (tasks instanceof Promise) {
            fetchTasks();
        } else if (Array.isArray(tasks)) {
            setTaskArray(tasks);
        }
    }, [tasks]);

    const openModal = (task) => {
        setCurrentTask(task);
        setEditedTask(task.task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTask(null);
        setEditedTask("");
    };

    const handleEditTask = async () => {
        try {
            toast.promise(editTask(currentTask.taskId, editedTask), {
                loading: 'Editing task...',
                success: 'Task edited',
                error: 'Error editing task',
            });
            closeModal();
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            toast.promise(deleteTask(taskId), {
                loading: 'Deleting task...',
                success: 'Task deleted',
                error: 'Error deleting task',
            })
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    const handleMarkTask = async (taskId) => {
        try {
            toast.promise(markTask(taskId), {
                loading: 'Marking task...',
                success: 'Task marked',
                error: 'Error marking',
            });
        } catch (error) {
            console.error("Error marking task:", error);
        }
    }

    return (
        <ul className="w-3/4 flex flex-col items-center justify-center">
            {taskArray.map((task) => (
                <li key={task.taskId} className="p-2  flex w-full bg-gradient-to-r from-cyan-100 via-orange-100 to-blue-100 justify-between text-2xl rounded-xl shadow-xl my-2 hover:transform hover:scale-101 transition duration-200 ease-in-out">
                    <div className="flex w-3/4">
                        <p>{task.task}</p>
                        <p className="text-2xl ml-auto mr-50 ">{task.completed ? "✔" : "✖️"}</p>
                    </div>
                    <div className="space-x-2 ">
                    <button onClick={() => handleMarkTask(task.taskId)} className="hover:cursor-pointer">
                        <img className="size-6 mr-2" src="arrow.png" alt="Edit" />
                    </button>
                    <button onClick={() => openModal(task)}  className="hover:cursor-pointer">
                        <img className="size-6" src="edit.png" alt="Edit" />
                    </button>
                    <button onClick={() => handleDeleteTask(task.taskId)} className="ml-2 hover:cursor-pointer">
                        <img className="size-6" src="delete.png" alt="Edit" />
                    </button>
                    </div>
                </li>
            ))}

{isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 backdrop-blur-sm transition-opacity duration-1200">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 transform transition-transform duration-3000 scale-100">
                        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
                        <input
                            type="text"
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Edit your task"
                        />
                        <div className="flex justify-end mt-4">
                            <button onClick={handleEditTask} className="px-4 py-2 bg-green-700 text-white rounded-lg mr-2 hover:bg-green-800 transition">Save</button>
                            <button onClick={closeModal} className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white" >Close</button>
                        </div>
                    </div>
                </div>
            )}
        </ul>
    );
};

export default TaskList;