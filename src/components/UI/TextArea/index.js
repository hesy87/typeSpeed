import React, { useContext, useState } from "react";
import { Input } from "antd";
import { dataContext } from "../../../context/data-context";
import moment from "moment";
const { TextArea } = Input;
const App = (props) => {
  const [inputWordCont, setinputWordCont] = useState();
  const ctx = useContext(dataContext);

  const inputHandler = (e) => {   ///counting word in a sentence
    const arr = e.target.value.split(" ");
    setinputWordCont(arr.filter((word) => word !== "").length);
  };

  const TimeHandler = () => {   /// find start time 
    const now = moment()
    ctx.setStartTime(now);
  };
  ctx.setinputWordCount(inputWordCont);
  return (
    <>
      <TextArea
        rows={4}
        placeholder="Write the sentence above"
        onChange={inputHandler}
        onClick={TimeHandler}
      />
    </>
  );
};

export default App;
