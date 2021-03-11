import { useEffect } from "react";

function useTitleChange(text) {
  useEffect(() => {
    document.title = text;
  }, [text]);
}

export default useTitleChange;
