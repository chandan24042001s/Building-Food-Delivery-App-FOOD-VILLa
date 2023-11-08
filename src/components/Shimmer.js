import React from 'react'

const Shimmer = () => {
  return (
    <div className='restraunt-list'>   
     
       {
        Array(20).fill(" ").map((e,index)=>(
          <div key={index} className='Shimmar-card'> </div>
        ))
      }
     
     </div>
  )
}




export default Shimmer;