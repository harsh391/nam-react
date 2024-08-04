import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
    return (
        <div className="res-card">
            <img 
                className="res-img"
                src={`${CDN_URL}/${cloudinaryImageId}`}/>
            <h1>
                {name}
            </h1>
            <h4>
                {cuisines.join(',')}
            </h4>
            <h4>
                {sla.slaString}
            </h4>
            <h4>
                {avgRating}
            </h4>

        </div>
    )
};

export default RestaurantCard;