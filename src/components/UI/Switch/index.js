import React, { useContext, useState } from "react";
import { Switch } from "antd";
import { dataContext } from "../../../context/data-context";

const App = () => {
  const ctx = useContext(dataContext);
  const onChange = (checked) => {
    if (checked === true) {
      ctx.setCountDownTimer(20);
      ctx.setSwitchStatus(true);
    } else {
      ctx.setCountDownTimer(30);
      ctx.setSwitchStatus(false);
    }
  };

  return (
    <>
      <span style={{ marginRight: "1rem" }}>Easy</span>
      <Switch
        defaultChecked={false}
        onChange={onChange}
        disabled={!ctx.enableTextArea}
      />
      <span style={{ marginLeft: "1rem" }}>Hard</span>
    </>
  );
};
export default App;
