import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
   
    const {name,cuisines,costForTwo,locality,avgRating}=resData.info
     return (
       <div className="res-card">
        
           <img
           className="res-logo"
             src={CDN_URL+resData.info.cloudinaryImageId}
             alt="card"
           />
        
   
         <div className="res-details">
           {" "}
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{locality}</h4>
           <h4>{avgRating}</h4>
         </div>
       </div>
     );
   };

   export default RestaurantCard