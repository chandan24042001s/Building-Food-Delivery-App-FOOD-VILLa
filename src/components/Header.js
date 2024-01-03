import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import info1 from "../utils/userContext";
import { useSelector } from "react-redux";


export const Title = () => {
  return (
    <a href="/">
      {" "}
      <img className="h-24 p-2 pl-8" src={require("../Images/FoodVilla.jpeg")} alt="" />
    </a>
  );
}; //name export

//Composition component
const Header = () => {
  const isOnline = useOnline();
  const [isLoggedInUser, setIsLoggedInUser] = useState("true");
  const { user } = useContext(info1);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex justify-between  h-20  font-bold"
      // id="shadow"
    >
      <Title/>

      <div className=" mr-3">
        <ul className="flex gap-x-2 text-[15px] pt-4 items-center">
          <Link to="/">
            <li className="text-Primary hover:text-Orange font-bold h-4 w-16 pt-2 text-center rounded-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-Primary hover:text-Orange font-bold h-4 w-16 pt-2 text-center rounded-lg">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-Primary hover:text-Orange font-bold h-4 w-20 pt-2 text-center rounded-lg">
              Contact
            </li>
          </Link>
          {/* <Link to="/instamart">
            <li className="">Instamart</li>
          </Link> */}
          <Link to="/cart">
            <span className="absolute right-20">{cartItems.length} </span>
            <li className=" text-Primary hover:text-Orange font-bold  h-4 w-10  pt-2 text-center rounded-lg">
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
          </Link>
          <Link to="/login">
            <li className="text-Primary hover:text-Orange font-bold h-4 w-16 pt-2 text-center rounded-lg relative pr-3">
              login
              {isOnline ? (
                <div className="h-3 w-3 rounded-full bg-LightGreen absolute right-0 top-3 "></div>
              ) : (
                <div className="h-3 w-3 rounded-full bg-gray-600 "></div>
              )}
            </li>
          </Link>

          {/* <div>{isLoggedInUser?
            (<button onClick={()=>{
                setIsLoggedInUser("false");
            }} > logout</button>)}
            {(<button onClick={()=>{
                setIsLoggedInUser("true");
            }}>Login</button>)}</div>  */}
        </ul>
      </div>
    </div>
  );
};

export default Header; //default export
// can export default only one component
