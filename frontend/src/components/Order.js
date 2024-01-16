import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Order = () => {
    
    const dispatch=useDispatch();
    const handleCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div className='flex justify-center align-middle mt-64 mb-30'>
       <h1 className='text-4xl'>
        Congratulations !! Your order has been Placed !!!
       </h1>
        </div>
  )
}

export default Order