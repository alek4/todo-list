import React, { useState } from "react";
import { FaCog } from "react-icons/fa";

interface SettingsProps {
  setClockFormat: Function;
  setWeatherLocation: Function;
  weatherLocation: string;
}

function toggleSettings() {
  document.getElementById("settings-panel")?.classList.toggle("open");
}

function importAll(r: any) {
  let images: any = [];
  r.keys().map((item: any) => images.push(r(item)));
  return images;
}

const bgs = importAll(
  require.context("../backgrounds", false, /\.(gif)$/)
);

export const Settings: React.FC<SettingsProps> = ({
  setClockFormat,
  setWeatherLocation,
  weatherLocation,
}) => {
  const [text, setText] = useState(weatherLocation);
  return (
    <>
      <FaCog
        onClick={() => toggleSettings()}
        className="absolute z-10 top-5 right-5 cursor-pointer text-2xl text-gray-100 opacity-70 hover:opacity-100"
      />

      <div
        id="settings-panel"
        className="flex flex-col items-center justify-between text-lg text-gray-100 p-14 bg-gray-800 absolute w-96 top-0 h-screen right-0 translate-x-96 transition-all"
      >
        <div>
          <h1 className="text-center text-3xl mb-5 font-bold">
            Settings
          </h1>
          <div>
            <p className="inline-block mr-3">Clock format: </p>

            <input
              className="mr-1.5"
              type="radio"
              name="clock"
              value={"24h"}
              defaultChecked
            />
            <label className="mr-6" htmlFor="clock">
              24h
            </label>
            <input
              className="mr-1"
              type="radio"
              name="clock"
              value={"12h"}
            />
            <label htmlFor="clock">12h</label>
          </div>
          <div className="mt-3">
            <label className="mb-1.5 inline-block" htmlFor="city">
              Weather location:
            </label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="py-2 rounded-md px-3 shadow-md text-black"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="mt-3">
            <p className=" mb-1.5">Background:</p>
            <div className="grid grid-cols-1 gap-4 h-96 overflow-y-scroll p-3">
              {bgs.map((b: any, i: number) => (
                <img
                  onClick={() => {
                    document.body.style.backgroundImage = `url(${b})`;
                  }}
                  className="rounded-md cursor-pointer hover:border-2 border-gray-400"
                  alt=""
                  key={i}
                  src={b}
                ></img>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            var valueToBeSet = (
              document.querySelector(
                'input[name="clock"]:checked'
              ) as HTMLInputElement
            ).value;

            if (valueToBeSet === "24h") {
              setClockFormat(false);
            } else {
              setClockFormat(true);
            }

            setWeatherLocation(text);

            toggleSettings();
          }}
          className="w-full mt-3 bg-green-500 rounded-md py-1 shadow-md"
        >
          Update
        </button>
      </div>
    </>
  );
};
