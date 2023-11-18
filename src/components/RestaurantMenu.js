import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
 
  const {resid}=useParams()
  const resInfo =useRestaurantMenu(resid)
 

  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;


  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h2>menu</h2>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li> */}
        {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
