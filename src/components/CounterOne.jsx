import React, { useContext } from "react";
import { UserContext } from "../App";

const CounterOne = () => {
  const user = useContext(UserContext);
  return (
    <div>
      this is counter one {user.countState.counterOne}
      <button
        onClick={() => user.countDispatch({ type: "INCREMENT", payload: 1 })}
      >
        increment
      </button>
      <button
        onClick={() => user.countDispatch({ type: "DECREMENT", payload: 5 })}
      >
        decrement
      </button>
      <button onClick={() => user.countDispatch({ type: "RESET" })}>
        reset
      </button>
    </div>
  );
};

export default CounterOne;
