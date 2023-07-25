import { useState } from "react";
import { dataContext } from "./data-context";

const DataContextProvider = (props) => {
  const [inputWordCount, setinputWordCount] = useState();
  const [showResult, setshowResult] = useState();
  const [showTime, setshowTime] = useState();
  return (
    <dataContext.Provider
      value={{ inputWordCount, setinputWordCount, showResult, setshowResult,showTime,setshowTime }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
