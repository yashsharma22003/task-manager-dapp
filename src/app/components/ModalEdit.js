'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { editTask } from '../contract/context';

export default function ModalEdit({ isOpen, onClose, taskId, refreshTasks }) {
  const [editText, setEditText] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleEdit = async () => {
    if (!editText.trim()) return;

    await editTask(taskId, editText);
    setConfirmation(`Task updated to: "${editText}"`);
    setEditText('');
    refreshTasks(); // Refresh tasks after editing
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
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Edit Task
              </Dialog.Title>

              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Enter new task"
                className="mt-4 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />

              <button
                onClick={handleEdit}
                className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
              >
                Save Changes
              </button>

              {confirmation && (
                <p className="mt-4 text-green-600">{confirmation}</p>
              )}

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
