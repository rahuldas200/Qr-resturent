import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../../services/operations/auth';

const LogOutModal = ({title,description,setOpen}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        await logout(navigate,dispatch)
    }


  return (
    <div className='absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-[#45973071]'>
        <div className='bg-richwhite-200 p-3 w-[25%] flex flex-col rounded-md h-[25%]  gap-3'>
            <h3 className='text-xl font-semibold text-center'>{title}</h3>
            <p className='text-center'>{description}</p>

            <div className='flex justify-between gap-3 px-5 mt-4'>
                <button onClick={() => setOpen(false)} className='px-3 py-2 bg-[#ced500] rounded-sm'>Cancle</button>
                <button onClick={() => handleClick()} className='px-3 py-2 bg-[#1cd500] rounded-sm'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default LogOutModal
