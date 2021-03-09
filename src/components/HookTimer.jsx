import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      hook timer {timer}{" "}
      <button onClick={() => clearInterval(intervalRef.current)}>
        clear timer{" "}
      </button>{" "}
    </div>
  );
}

export default HookTimer;
