import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext, useCallback } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { debounce } from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.5359459&lng=77.2998095&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  const debouncedSetUserName = useCallback(
    debounce((val) => setUserName(val), 1000),
    []
  );
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);          // immediate typing feedback
    debouncedSetUserName(value);  // delayed state update
  };


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
