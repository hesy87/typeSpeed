import React, { useContext } from "react";
import {
  PoweroffOutlined,
  FieldTimeOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { dataContext } from "../../../context/data-context";
import moment from "moment/moment";

const App = ({ modelName, setStatus, setStatusReset }) => {
  const {
    setFinishTime,
    startTime,
    setDiffTime,
    setEnableTextArea,
    setInputText,
    enableTextArea,
    setStartTimer,
    startTimer,
    setSwitchSectence,
    switchSectence,
    setTimerStoper,
    timerStoper,
  } = useContext(dataContext);

  const enterLoading = (name) => {
    //// calcute Diffrence time
    const now = moment();
    setFinishTime(now);
    setDiffTime((now.diff(startTime) / 1000).toFixed(2));
    if (name === "start") {
      setStatus();
      setEnableTextArea(!enableTextArea);
      setStartTimer(!startTimer);
    } else if (name === "finish") {
      setStatus();
      setStatusReset();
      setTimerStoper(!timerStoper);
      setEnableTextArea(!enableTextArea);
    } else if (name === "Restart") {
      setStatusReset();
      setInputText("");
      setSwitchSectence(!switchSectence);
    }
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
