import React, { useEffect, useState } from 'react'

const Profile = (props) => {
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);

  useEffect(()=>{
    //{console.log("useEffect")}
    const timer=setInterval(()=>{
      console.log("nameste")
    },1000);
    return ()=>{
      clearInterval(timer);
    }
  },[count,count2]
  );
  
  //console.log("render")
  return (
    <>

    <h1>Profile Functional Component</h1>
    <h2 className='font-bold text-xl'>{props.name}</h2>
    <h2>Count :{count} </h2>

    <button onClick={()=>{
      setCount(count+1);
      setCount2(1);
    }} >Click here</button>
    </>
    
  )
}

export default Profile;