import RestaurantCard, {
  withPromotedLabel,
  withPromotedLabel,
} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.18605737457934&lng=73.04790694266559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // higher order component

  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return (
      <h1>Looks like you are offline!! please check your interet connection</h1>
    );
    console.log(listOfRestaurants)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex  items-center">
        <div className="">
          {" "}
          <input
            type="text"
            className="ml-4 my-5 border-solid border-2 border-black-500 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-3 mr-7 bg-green-500 rounded-lg px-2 py-1"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="ml-3 my-5 mr-7 bg-green-500 rounded-lg px-2 py-1"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
