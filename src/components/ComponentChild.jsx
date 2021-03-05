import React, { useContext } from "react";
import { ChanelContext, UserContext } from "../App";

const ComponentChild = () => {
  const user = useContext(UserContext);
  const chanel = useContext(ChanelContext);

  return (
    <div>
      this is child component {user} + {chanel}{" "}
    </div>
  );
};

export default ComponentChild;
