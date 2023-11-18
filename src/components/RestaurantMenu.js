import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resid}=useParams()
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API_URL+resid
    );
    const json = await data.json();
    setResInfo(json);
  };
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
