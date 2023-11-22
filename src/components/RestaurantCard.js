import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
   
    const {name,cuisines,costForTwo,locality,avgRating}=resData.info
     return (
       <div className="bg-gray-300 w-64 mx-5 m-2 rounded-lg hover:8" >
        
           <img
           className="w-full p-2 items-center rounded-xl"
             src={CDN_URL+resData.info.cloudinaryImageId}
             alt="card"
           />
        
   
         <div className="m-1 p-3">
           {" "}
           <h3 className="font-bold">{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwo}</h4>
           <h4>{locality}</h4>
           <h4>{avgRating} rating</h4>
         </div>
       </div>
     );
   };




   //Higher order component


   export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-green-800 text-white m-2 p-2 rounded-lg ">Veg</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
   }

   export default RestaurantCard  