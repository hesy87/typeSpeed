import React, { useContext } from "react";
import {
  PoweroffOutlined,
  FieldTimeOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import { dataContext } from "../../../context/data-context";
import moment from "moment/moment";

const App = ({ modelName, setStatus, setStatusReset, text }) => {
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
    timerReset,
    setTimerReset,
    inputText,
  } = useContext(dataContext);

  const [messageApi, contextHolder] = message.useMessage();
  const enterLoading = (name) => {
    //// calcute Diffrence time
    const now = moment();
    setFinishTime(now);
    setDiffTime((now.diff(startTime) / 1000 / 60).toFixed(2));
    if (name === "start") {
      setStatus();
      setEnableTextArea(!enableTextArea);
      setStartTimer(!startTimer);
    } else if (name === "finish") {
      setStatus();
      setStatusReset();
      setTimerStoper(!timerStoper);
      setEnableTextArea(!enableTextArea);
      if (inputText === text) {
        messageApi.open({
          type: "success",
          content: "Great job!",
          duration: 2,
        });
      } else {
        messageApi.open({
          type: "warning",
          content: "Keep practicing!",
          duration: 2,
        });
      }
    } else if (name === "Restart") {
      setStatusReset();
      setInputText("");
      setSwitchSectence(!switchSectence);
      setTimerReset(!timerReset);
    }
  };
  return (
    <>
      {contextHolder}
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
    </>
  );
};
export default App;
