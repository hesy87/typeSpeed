import React, { useEffect, useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;
const App = (props) => {
  const [inputWordCont, setinputWordCont] = useState();
  const [inputSent, setinputSent] = useState();

  const inputHandler = (e) => {
    const arr = e.target.value.split(" ");
    setinputWordCont(arr.filter((word) => word !== "").length);
    setinputSent(arr)
  };



  const correctSent = () => {
    if(inputSent === props.text) {console.log('correct');} else console.log('wrong');
  };

  return (
    <>
      <TextArea
        rows={4}
        placeholder="Write the sentence above"
        onChange={inputHandler}
      />
    </>
  );
};

export default App;
