import { useContext } from "react";
import { swiggyIMageCDN } from "../../constant";
import info1 from "../utils/userContext";

const RestrauntCard = (props) => {
  const { user } = useContext(info1);
  return (
    <div>
      <div id="shadow" className="w-[250px] h-[320px] m-4 p-3 rounded-xl">
        <img
          className="h-[160px] w-72 rounded-2xl"
          src={swiggyIMageCDN + props.cloudinaryImageId}
        />
        <h2 className="font-bold text-lg">{props.name}</h2>
        <h4 className="text-sm">{props.cuisines?.join(" ")}</h4>
        <div className="bg-LightGreen h-8 rounded-lg w-14 mt-2 text-Secondry flex justify-center items-center text-sm">
          <i class="fa-solid fa-star p-1"></i>
          {props.avgRating}
        </div>

        {/* <h4>{user.name}</h4>

          <h4> {user.email} </h4> */}
      </div>
    </div>
  );
};

export default RestrauntCard;

/***
 * app.js(props)
 *   <BODY user/>
 *      >restrauntcard.js user/>
 * `      <{user}
 */
