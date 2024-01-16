


import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "./../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div id="cart">
      <div id="cart-top" className="">
        <h1>{cartItems.length === 0 ? "Empty Cart" : "Cart"}</h1>
      <div className="flex justify-between gap-4 ">
        <div className="ml-4"> 
        { cartItems.length>0 && <Link to="/order">
      <button onClick={handleClearCart} className="text-3xl h-14 px-5 py-2 bg-Green text-White rounded-lg hover:text-black hover:bg-red-700">Place Order</button>
      </Link>}
        </div>
      {cartItems.length > 0 && (
          <button onClick={handleClearCart}>
            Clear Cart <i id="trash-bin" class="ri-delete-bin-line"></i>
          </button>
        )}
      </div>
      </div>

      {cartItems?.map((item) => {
        return <MenuCard key={item?.card?.info?.id} dishData={item} />;
      })}
    </div>
  );
};

export default Cart;















// import React from 'react';
// import { useSelector } from 'react-redux';
// import store from '../utils/store';
// import FoodItem from './FoodItem';

// const Cart = () => {
//     const cartItems=useSelector((store)=>store.cart.items);
//   return (
//     <div>
//         <h1> Cart-Items-{cartItems.length}</h1>
//         {/* //<FoodItem {...cartItems[0]}/> */}
//         <div className='flex flex-wrap'>
//             {cartItems.map((item)=>(
//                 <FoodItem {...item}/>
//             ))}
//         </div>

//     </div>
//   )
// }

// export default Cart