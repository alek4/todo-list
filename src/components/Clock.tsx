import React, { useEffect, useState } from "react";

interface ClockProps {
  hour12?: boolean;
}

export const Clock: React.FC<ClockProps> = ({ hour12 = false }) => {
  const [clockState, setClockState] = useState<string>();

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12,
        })
      );
    }, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [hour12]);

  return (
    <div className="bg-gray-100 w-fit mx-auto text-center font-thin py-6 px-16 text-5xl rounded-lg">
      {clockState}
    </div>
  );
};
