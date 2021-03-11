import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
import useTitleChange from "./useTitleChange";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  // useDocumentTitle(count);
  useTitleChange(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count{count} </button>
    </div>
  );
}

export default DocTitleOne;
