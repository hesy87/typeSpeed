import { useState } from "react";
import { dataContext } from "./data-context";

const DataContextProvider = (props) => {
  const [inputWordCount, setinputWordCount] = useState();
  const [showResult, setshowResult] = useState();
  const [showTime, setshowTime] = useState();
  const [startTime, setstartTime] = useState();
  const [finishTime, setFinishTime] = useState();

  console.log("start", startTime);
  console.log("finish", finishTime);
  return (
    <dataContext.Provider
      value={{
        inputWordCount,
        setinputWordCount,
        showResult,
        setshowResult,
        showTime,
        setshowTime,
        startTime,
        setstartTime,
        finishTime,
        setFinishTime,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
