import React, { useState } from "react";

import { FaArrowAltCircleUp } from "react-icons/fa";

interface SpotifyPlayerProps {}

export const SpotifyPlayer: React.FC<SpotifyPlayerProps> = () => {
  // https://open.spotify.com/album/0hjorN3l2DNcd5GKYeZ0kn?si=WDmgHDbqRpOhWePxKhrB9w

  const [text, setText] = useState("");
  const [url, setUrl] = useState(
    "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO45sJGM?si=4123a15b1f984320"
  );

  return (
    <div>
      <iframe
        title="spotify"
        src={url}
        width={"250"}
        height={"380"}
        frameBorder={"0"}
        className={"rounded-lg"}
        allow={"encrypted-media"}
      ></iframe>
      <div className="flex justify-between items-center w-[250px] mt-3 gap-3">
        <input
          type="text"
          placeholder="Playlist Url"
          className="py-2 rounded-md px-3 shadow-md w-full"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <FaArrowAltCircleUp
          onClick={() => {
            console.log(text.indexOf("embed"));

            if (text.indexOf("embed") === -1) {
              var temp_url = text.substring(
                0,
                text.indexOf(".com/") + 5
              );
              temp_url =
                temp_url +
                "embed" +
                text.substring(
                  text.indexOf(".com/") + 4,
                  text.length - 1
                );
              setUrl(temp_url);
            } else {
              setUrl(text);
            }
            setText("");
          }}
          className="cursor-pointer text-white text-4xl shadow-md"
        ></FaArrowAltCircleUp>
      </div>
    </div>
  );
};
