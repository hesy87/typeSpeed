import { useState } from "react";
import { dataContext } from "./data-context";

const DataContextProvider = (props) => {
  const [inputWordCount, setinputWordCount] = useState();
  const [inputText, setInputText] = useState();
  const [showTime, setshowTime] = useState();
  const [startTime, setStartTime] = useState();
  const [finishTime, setFinishTime] = useState();
  const [startTimer, setStartTimer] = useState(false);
  const [diffTime, setDiffTime] = useState();
  const [wordPerTime, setWordPerTime] = useState();
  const [enableTextArea, setEnableTextArea] = useState(true);
  const [countDownTimer, setCountDownTimer] = useState(30);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [switchSectence, setSwitchSectence] = useState(false);
  const [timerStoper, setTimerStoper] = useState(true);

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
        enableTextArea,
        setEnableTextArea,
        inputText,
        setInputText,
        startTimer,
        setStartTimer,
        countDownTimer,
        setCountDownTimer,
        switchStatus,
        setSwitchStatus,
        switchSectence,
        setSwitchSectence,
        setTimerStoper,
        timerStoper,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
