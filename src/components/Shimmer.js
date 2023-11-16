import React from 'react'

const Shimmer = () => {
  return (<>
    <div className='w-auto h-16 bg-gray-100'> </div>
    <div className='flex flex-wrap'>   

   
     
       {
        Array(20).fill(" ").map((e,index)=>(
          <div key={index} className='w-1/6 h-56 m-5 p-5 shadow-lg bg-gray-100 border-spacing-3'> </div>
        ))
      }
     
     </div>
     </>
  )
}




export default Shimmer;