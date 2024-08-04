import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [res, setRes] = useState(restaurants);

    return (
        <div className="body">
            <div className="Search">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const list = res.filter(ele => ele.info.avgRating > 4.2)
                        setRes(list)
                    }}
                >
                    Top Rated Places
                </button>
            </div>
            <div className="res-container">
                {
                    res.map(resData => {
                        return (
                            <RestaurantCard key={resData.info.id} resData={resData}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Body;