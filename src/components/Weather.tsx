import React, { useEffect, useState } from "react";

interface WeatherProps {}

export const Weather: React.FC<WeatherProps> = () => {
  const [data, setData] = useState<any>()
  // const [loading, setLoading] = useState<any>(true)
  const API_KEY = "6805de5d37361b3d2d50f30ea8f39ad1";
  const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=Milan&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    fetch(API_CALL)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false)
        setData(data)
        console.log(data);
          
      });
  }, [])
  
  

  return (<div>
    {data ? <div>{data.sys.name}</div> : <div>loading...</div>}
  </div>);
};
