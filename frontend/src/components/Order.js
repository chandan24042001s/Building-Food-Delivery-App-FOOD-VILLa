import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Order = () => {
    
    const dispatch=useDispatch();
    const handleCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div className='flex justify-center items-center bg-[#2196F3] w-[100vw] h-[100vh]'>
      
<div class="dialog-box">
	<div class="firework">
		<div class="emitter order-1"></div>
		<div class="emitter order-3"></div>
		<div class="emitter order-2"></div>
		<div class="emitter order-4"></div>
	</div>
	<div class="text-3xl font-bold">Congratulations!</div>
	<button onclick="start();">Go Back</button>
</div>


    </div>
    )
}

export default Order