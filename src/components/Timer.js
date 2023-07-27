import { Space, Progress } from "antd";
import React, { useState, useRef, useEffect, useContext } from "react";
import { dataContext } from "../context/data-context";

const App = () => {
  const ctx = useContext(dataContext);
  const Ref = useRef(null);
  const [remain, setRemain] = useState();

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    if (ctx.timerStoper === true) {
      console.log(remain);
    } else {
      setRemain(seconds);
    }
    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      ctx.setCountDownTimer(seconds > 9 ? seconds : "0" + seconds);
    }
  };

  const clearTimer = (e) => {
    ctx.setCountDownTimer(`${ctx.countDownTimer}`);
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + ctx.countDownTimer);
    return deadline;
  };

  useEffect(() => {
    if (ctx.startTimer === true) {
      clearTimer(getDeadTime());
    }
  }, [ctx.startTimer]);

  return (
    <div>
      {/* <h2>{ctx.countDownTimer}</h2> */}
      <Space wrap>
        <Progress
          type="circle"
          percent={ctx.countDownTimer}
          format={(percent) => `${ctx.countDownTimer}`}
          size={80}
        />
      </Space>
    </div>
  );
};

export default App;
