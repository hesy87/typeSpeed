import { useState } from "react";
import { dataContext } from "./data-context";

const DataContextProvider = (props) => {
  const [inputWordCount, setinputWordCount] = useState();
  const [showTime, setshowTime] = useState();
  const [startTime, setStartTime] = useState();
  const [finishTime, setFinishTime] = useState();
  const [diffTime, setDiffTime] = useState();
  const [wordPerTime, setWordPerTime] = useState();


  return (
    <dataContext.Provider
      value={{
        inputWordCount,
        setinputWordCount,
        showTime,
        setshowTime,
        startTime,
        setStartTime,
        finishTime,
        setFinishTime,
        diffTime,
        setDiffTime,
        wordPerTime,
        setWordPerTime,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
