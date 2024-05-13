import React from 'react'
import Header from '../common/Header'
import { FiPlus } from "react-icons/fi";

const menu = ({setOpen,open}) => {

  console.log(open);

  return (
    <div className='flex flex-col gap-5 '>
      <Header path={"Menu item"}/>

      <div className='p-2'>

        <div className='flex  justify-between items-center'>
          <p>Total items - </p>
          <button className='flex gap-2 text-sm px-3 py-2 items-center bg-black rounded-sm text-richwhite-100'>
            <FiPlus/>
            <p className='text-sm'>Add item</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default menu


