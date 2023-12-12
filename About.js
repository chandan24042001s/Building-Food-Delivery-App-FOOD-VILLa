import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
// class About extends React.Component {
//    constructor(props){
//         super(props);
//         console.log("parent constructor");

//         this.state={
//             count:0,
//             count2:0
//         }

//     }

//     componentDidMount(){
//         console.log(" parent componentDidMount");
//     }
//   render() {
//     console.log("parent render");
//   return (
//    <>
//     <h1 className='font-bold text-4xl'> About Us</h1>
//     <h3 className='text-2xl'> This is live . Components will render here. </h3>
//     {/* <ProfileClass name={"first child"}/> */}
//     <Profile name={"First child"}/>

//       </>
//   )
//   }
// }

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-28">
        <div className="ml-32 mr-32 ">
          <h1 className="w-[400px] font-bold text-[70px] text-Primary">
            Welcome to The world of
          </h1>
          <span className="font-bold text-[70px]  bg-Orange pl-2 pr-2 rounded-lg text-Secondry">
            Tasty & Fresh Food
          </span>
          <h4 className="font-bold text-[25px] text-Primary italic">
            "Better you will feel if you eat a Food
            <span className="text-LightOrange">Villa</span> healthy meal"
          </h4>
        </div>
        <div>
          <img src="https://foodfire-app.netlify.app/burger-image.ec55d069.png"></img>
        </div>
      </div>
    </>
  );
};

export default About;

/**
*parent constructor
parent render
child constructor first child 
child render first child 
child constrctor secon child
child render second child
childDIdMount first child
child DidMount second child
parent did mount 
 */
