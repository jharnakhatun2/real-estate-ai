import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import TextEditor from './text-editor';
import Button from './ui/Button';
import { FaFilePdf, FaSave } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Hello</Button>
      <Dialog
        className={
          'fixed  inset-0 z-50 m-auto h-max w-[90vw] animate-jump-in animate-ease-linear lg:w-1/2'
        }
        open={isOpen}
        onClose={() => {}}
      >
        <Dialog.Panel
          className={
            'bg-white rounded-xl overflow-hidden ring-2 h-96 ring-secondary'
          }
        >
          <TextEditor />
          <div className='absolute flex gap-4 right-4 top-3'>
            <FaFilePdf
              title='Download as PDF'
              className='text-[#444] cursor-pointer hover:text-red-800 text-lg'
            />
            <FaSave
              title='Save File'
              className='text-[#444] cursor-pointer hover:text-green-700 text-lg'
            />
            <AiFillCloseCircle
              title='Close Editor'
              onClick={() => setIsOpen(false)}
              className='text-[#444] cursor-pointer hover:text-red-500 text-lg'
            />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
