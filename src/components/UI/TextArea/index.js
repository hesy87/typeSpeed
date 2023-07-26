import React, { useContext, useState } from "react";
import { Input } from "antd";
import { dataContext } from "../../../context/data-context";
const { TextArea } = Input;
const App = (props) => {
  const [inputWordCont, setinputWordCont] = useState();
  const ctx = useContext(dataContext);

  const inputHandler = (e) => {
    const arr = e.target.value.split(" ");
    setinputWordCont(arr.filter((word) => word !== "").length);
  };

  const TimeHandler = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    ctx.setstartTime(today);
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
