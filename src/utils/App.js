import React, { Suspense, useState } from "react";
import {createRoot} from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { createBrowserRouter ,Outlet,RouterProvider,useParams,useRouteError} from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy } from "react";
import Shimmer from "../components/Shimmer";
import { useContext } from "react";
import info1 from "./userContext"


const Instamart=lazy(()=>import("../components/InstaMart"));
const Applayout = () => {
  const error=useRouteError();
  const {id}=useParams();

  const [user1,setUser1]=useState({
    name:"Chandan bhaiya",
    email:"hb72102849@gmail.com"
  });


  // const {id}=params;
 // console.log(id);  
  //console.log(error);
  return (

    <info1.Provider value={{
      user:user1,
      setUser:setUser1

    }}>
      
      <Header />
      <Outlet/>
      <Footer />
    </info1.Provider>
  );
};

const AppRouter=createBrowserRouter([
  {
    path: "/",
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",

        element:(<Suspense fallback={<Shimmer/>}>
          <Instamart/>
          </Suspense>
          )
      } 

    ]
  },

  
])


const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
