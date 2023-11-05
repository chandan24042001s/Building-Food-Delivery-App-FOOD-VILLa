import { restrauntlist, swiggyIMageCDN } from "../../constant";


const RestrauntCard =(props)=>{
             
    return (<div>
        <div className="card">
            <img className="dish" src={swiggyIMageCDN+props.cloudinaryImageId} />
            <h2>{props.name}</h2>
            <h4>{props.cuisines.join(" ")}</h4>
            {<h5>{props.avgRating} stars</h5> }
        </div>
    </div>
    )
}
const Body=()=>{
    return (
        <div className="cardlist">
        {
            restrauntlist.map((restraunt) => <RestrauntCard {...restraunt.card.card.info} />)
        }
        </div>
    )
};

export default Body;