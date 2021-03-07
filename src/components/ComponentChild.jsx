import React, { useContext } from "react";
import { ChanelContext, UserContext } from "../App";
import CounterOne from "./CounterOne";

const ComponentChild = () => {
  const user = useContext(UserContext);
  const chanel = useContext(ChanelContext);

  return (
    <div>
      this is child component {user} + {chanel} <CounterOne />
    </div>
  );
};

export default ComponentChild;
