import React from 'react'
import Header from '../common/Header'
import { FiPlus } from "react-icons/fi";
import { useOpen } from '../../../contexts/OpenContext';

const menu = () => {

  const {open,setOpen} = useOpen();

  return (
    <div className='flex flex-col gap-5 '>
      <Header path={"Menu item"}/>

      <div className='p-2'>

        <div className='flex  justify-between items-center'>
          <p>Total items - </p>
          <button onClick={()=> setOpen('add-menu')} className='flex gap-2 text-sm px-3 py-2 items-center bg-black rounded-sm text-richwhite-100'>
            <FiPlus/>
            <p className='text-sm'>Add item</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default menu


