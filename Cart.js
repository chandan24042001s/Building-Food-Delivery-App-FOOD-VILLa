import React from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import FoodItem from './FoodItem';

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className='bg-Green h-10 w-28 rounded-lg text-White p-2 m-6'>
        <h1> Cart-Items-{cartItems.length}</h1>
        {/* //<FoodItem {...cartItems[0]}/> */}
        <div className='flex flex-wrap'>
            {cartItems.map((item)=>(
                <FoodItem {...item}/>
            ))}
        </div>

    </div>
  )
}

export default Cart