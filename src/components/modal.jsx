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
            'bg-white rounded-xl   overflow-hidden ring-2 h-96 ring-secondary'
          }
        >
          <div className='flex items-center gap-3 my-2 ml-auto mr-2 w-max'>
            <button className='px-2 py-1 text-xs transition-all rounded hover:bg-black/20'>
              Download PDF
            </button>
            <AiFillCloseCircle
              title='Close Editor'
              onClick={() => setIsOpen(false)}
              className='text-[#444]  cursor-pointer hover:text-red-500 text-lg'
            />
          </div>
          <div className='relative'>
            <TextEditor />
            <div className='absolute flex gap-4 right-4 top-3'>
              <FaSave
                title='Save File'
                className='text-[#444] cursor-pointer hover:text-green-700 text-lg'
              />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
