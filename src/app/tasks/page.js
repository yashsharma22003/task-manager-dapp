'use client'

import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { fetchTasks } from "../contract/context";
import TaskList from "../components/TaskList";
import { useRouter } from 'next/navigation';

const page = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchedTasks = fetchTasks()
        setTasks(fetchedTasks);
    }, [])

    const refreshPage = () => {
         window.location.reload();
      };

    return (
        <div className="bg-gradient-to-r from-blue-100 via-red-100 to-pink-100">



            <div className="h-screen flex flex-col items-center justify-center"> 

                <div className="py-10 w-3/4 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center ">
                <div className="flex space-x-64 border-b-2 border-gray-400 font-bold text-2xl p-2">
                <h1 className="px-2">Tasks</h1>
                <h1 className="px-2">Completed</h1>
                <h1 className="px-2">Actions</h1>

                </div>
                
                    {typeof tasks !== 'undefined' ?<>
                    
                    <TaskList tasks={tasks}  /> </> : (<p>No tasks available</p>)}
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <h2 className="text-xl font-semibold">Add a new task</h2>
                        <p className="mt-2 text-gray-600">
                        *Please click refresh after adding interacting to see the changes
                        </p>
                    </Modal>
                    <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg bg-blue-300 px-4 py-2 text-black hover:bg-blue-400 transition mt-6 font-bold  hover: cursor-pointer"
                >
                    Add New Task
                </button>

                <button className="rounded-lg bg-green-300 px-4 py-2 text-black hover:bg-green-400 transition mt-2 font-bold  hover: cursor-pointer"
                onClick={refreshPage}
                >Refresh</button>
                </div>

               
            </div>



        </div>
    )
}

export default page;