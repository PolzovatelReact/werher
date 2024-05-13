import React, { useState } from "react";
import axios from "axios";
import Wether from "./components/wether";

const MyWeather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "8f7bdc5378bb2125afc88fa337d78611";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
      />
      <Wether weatherData={data} />
    </div>
  );
};

export default MyWeather;
