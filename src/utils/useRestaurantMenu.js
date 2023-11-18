import { useEffect, useState } from "react";
import {MENU_API_URL} from "../utils/constants"

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu
