import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherWindy,
  TiWeatherSunny,
} from "react-icons/ti";

interface WeatherProps {
  city: string;
}

function getWeatherIcon(code: number) {
  if (code > 801) {
    return <TiWeatherCloudy />;
  } else if (code === 801) {
    return <TiWeatherPartlySunny />;
  }

  code = Math.floor(code / 100);

  switch (code) {
    case 2:
      return <TiWeatherStormy />;

    case 3:
      return <TiWeatherShower />;

    case 5:
      return <TiWeatherDownpour />;

    case 6:
      return <TiWeatherSnow />;

    case 7:
      return <TiWeatherWindy />;

    case 8:
      return <TiWeatherSunny />;

    default:
      return "loading...";
  }
}

export const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weather, setWeather] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    fetch(API_CALL)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== "404") {
          setWeather(data);
        } else {
          setError(true);
        }
      })
      .then(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {error ? (
            <div className="absolute top-[-4rem] right-0 left-0 bg-red-500 text-center py-3 text-lg text-gray-100 animate-dropdown">
              City not found
            </div>
          ) : null}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-center text-center">
            <div className="flex items-center justify-center text-4xl gap-3">
              <div className="text-6xl">
                {error ? (
                  <TiWeatherSunny />
                ) : (
                  getWeatherIcon(weather.weather[0].id)
                )}
              </div>
              <p>{error ? "0" : Math.ceil(weather.main.temp)}&deg;</p>
            </div>
            <div className="flex items-center mx-auto mt-3">
              <FaMapMarkerAlt className="mr-3" />
              <p className="text-2xl">
                {error ? "Not found" : weather.name}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
