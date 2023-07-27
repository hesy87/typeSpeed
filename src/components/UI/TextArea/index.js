import React, { useContext, useState } from "react";
import { Input } from "antd";
import { dataContext } from "../../../context/data-context";
import moment from "moment";
const { TextArea } = Input;
const App = (props) => {
  const ctx = useContext(dataContext);

  const inputHandler = (e) => {
    ///counting word in a sentence
    ctx.setInputText(e.target.value);
    const arr = e.target.value.split(" ");
    ctx.setinputWordCount(arr.filter((word) => word !== "").length);
  };

  const TimeHandler = () => {
    /// find start time
    const now = moment();
    ctx.setStartTime(now);
  };

  return (
    <>
      <TextArea
        rows={4}
        placeholder="Write the sentence above"
        onChange={inputHandler}
        onClick={TimeHandler}
        disabled={ctx.enableTextArea}
        value={ctx.inputText}
      />
    </>
  );
};

export default App;
