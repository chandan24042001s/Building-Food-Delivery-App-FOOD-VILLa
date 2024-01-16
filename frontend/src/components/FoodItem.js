import React from 'react'
import { swiggyIMageCDN } from '../../constant'

const FoodItem = (items) => {
  return (
    <div>
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            {console.log(items)}
            <img src={swiggyIMageCDN+items?.card?.info?.imageId
} />
            <h1 className=" font-bold text-2xl ">{items?.card?.info?.name} </h1>
            <h3> {items?.card?.info?.description} </h3>
            <h4 className="text-xl"> Rupees : {items?.card?.info?.price/100}</h4>

        </div>
    </div>
  )
}

export default FoodItem