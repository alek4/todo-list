import React, { useState } from "react";
import "./index.css";
import { TodoList } from "./components/TodoList";
import { Weather } from "./components/Weather";

import { SpotifyPlayer } from "./components/SpotifyPlayer";
import { Clock } from "./components/Clock";
import { Settings } from "./components/Settings";

function App() {
  const [clockFormat, setClockFormat] = useState(false);
  const [weatherLocation, setWeatherLocation] =
    useState<string>("milan");

  return (
    <>
      <div className="text-gray-900 pt-20 w-full h-screen mx-auto">
        <Settings
          setClockFormat={setClockFormat}
          weatherLocation={weatherLocation}
          setWeatherLocation={setWeatherLocation}
        />
        <Clock hour12={clockFormat}></Clock>
        <div className="flex justify-center mt-20 gap-40 ">
          <Weather city={weatherLocation}></Weather>
          <TodoList></TodoList>
          <SpotifyPlayer></SpotifyPlayer>
        </div>
      </div>
    </>
  );
}

export default App;
