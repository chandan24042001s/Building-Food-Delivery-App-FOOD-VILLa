import { swiggyIMageCDN } from "../../constant";

const RestrauntCard = (props) => {
    return (
      <div>
        <div className="w-72 h-90 m-2 p-2 shadow-lg bg-pink-50">
          <img className="h-48 w-72" src={swiggyIMageCDN + props.cloudinaryImageId} />
          <h2 className="font-bold text-2xl">{props.name}</h2>
          <h4>{props.cuisines?.join(" ")}</h4>
          {<h5>{props.avgRating} stars</h5>}
        </div>
      </div>
    );
  };

  export default RestrauntCard;