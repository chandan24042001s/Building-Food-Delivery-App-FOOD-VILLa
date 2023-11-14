import { swiggyIMageCDN } from "../../constant";

const RestrauntCard = (props) => {
    return (
      <div>
        <div className="card">
          <img className="dish" src={swiggyIMageCDN + props.cloudinaryImageId} />
          <h2>{props.name}</h2>
          <h4>{props.cuisines?.join(" ")}</h4>
          {<h5>{props.avgRating} stars</h5>}
        </div>
      </div>
    );
  };

  export default RestrauntCard;