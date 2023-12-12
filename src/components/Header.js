import { useState } from "react";
import About from "./About";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useContext } from "react";
import info1 from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Title = () => {
  return (
    <a href="/">
      {" "}
      <img className="h-28 p-2" src="" alt="Logo" />
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
      className="flex justify-between items-center h-20  font-bold"
      id="shadow"
    >
      <Title />

      <div className=" mr-3">
        <ul className="flex gap-x-1 items-center">
          <Link to="/">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange  h-10 w-16 pt-2 text-center rounded-lg">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange h-10 w-16 pt-2 text-center rounded-lg">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange h-10 w-20 pt-2 text-center rounded-lg">
              Contact
            </li>
          </Link>
          {/* <Link to="/instamart">
            <li className="">Instamart</li>
          </Link> */}
          <Link to="/cart">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange  h-10 w-10 pt-2 text-center rounded-lg">
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
            {/* {cartItems.length}  */}
          </Link>
          <Link to="/login">
            <li className="text-Primary hover:text-Secondry hover:bg-Orange h-10 w-16 pt-2 text-center rounded-lg relative pr-3">
              login
              {isOnline ? (
                <div className="h-3 w-3 rounded-full bg-LightGreen absolute right-1 top-4 "></div>
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
