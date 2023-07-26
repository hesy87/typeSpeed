import React, { useContext, useState } from "react";
import {
  PoweroffOutlined,
  FieldTimeOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { dataContext } from "../../../context/data-context";
import moment from "moment/moment";

const App = ({ modelName, setStatus, setStatusReset }) => {
  const ctx = useContext(dataContext);

  const enterLoading = (name) => {
    //// calcute Diffrence time
    const now = moment();
    ctx.setFinishTime(now);
    ctx.setDiffTime((now.diff(ctx.startTime) / 1000).toFixed(2));
    if (name === "start") setStatus();
    else if (name === "finish") {
      setStatus();
      setStatusReset();
    } else if (name === "Restart") { setStatusReset();}
  };
  return (
    <Button
      type={
        modelName === "start"
          ? "primary"
          : modelName === "finish"
          ? "primary"
          : modelName === "Restart"
          ? "dashed"
          : "null"
      }
      icon={
        modelName === "start" ? (
          <FieldTimeOutlined />
        ) : modelName === "finish" ? (
          <PoweroffOutlined />
        ) : modelName === "Restart" ? (
          <RedoOutlined />
        ) : (
          "null"
        )
      }
      onClick={() => enterLoading(modelName)}
      danger={modelName === "start" ? false : true}
      size="large"
    >
      {modelName === "start"
        ? "START !"
        : modelName === "finish"
        ? "STOP !"
        : modelName === "Restart"
        ? "RESTART"
        : "null"}
    </Button>
  );
};
export default App;
