'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { addTask } from '../contract/context';
import { editTask } from '../contract/context';
import toast from 'react-hot-toast';

export default function Modal({ isOpen, onClose, children }) {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleAddText = async () => {
    try{
      setSubmittedText(inputText);
      const transaction = addTask(inputText)
      toast.promise(transaction, {
        loading: 'Adding task...',
        success: 'Task added on the blockchain',
        error: (err) => {
          const reason = err?.reason || err?.error?.message || 'Transaction failed unexpectedly';
          return `Error: ${reason}`;
        },
      });
      
      setInputText('');
    } catch (error) {
      console.error("Error while adding task", error);
    }
  
   
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-200 bg-opacity-30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              {children}

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter the task"
                className="mt-4 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
              
              <button
                onClick={handleAddText}
                className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
              >
                Add Task
              </button>

              {/* Display submitted text */}


              <button
                onClick={onClose}
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
              >
                Close
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
