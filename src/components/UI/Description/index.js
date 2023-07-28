import React from "react";
import { Descriptions } from "antd";
import { useContext } from "react";
import { dataContext } from "../../../context/data-context";
const App = () => {
  const ctx = useContext(dataContext);
  /// calcute word per second
  ctx.setWordPerTime((ctx.diffTime / ctx.inputWordCount).toFixed(3));
  return (
    <Descriptions title="Result" bordered style={{ marginTop: "2rem" }}>
      <Descriptions.Item span={2} label="Word Count">
        {ctx.inputWordCount}
      </Descriptions.Item>
      <Descriptions.Item label="Your Time (Mi)">
        {ctx.diffTime}
      </Descriptions.Item>
      <Descriptions.Item label="Word per Minute">
        {ctx.wordPerTime}
      </Descriptions.Item>
    </Descriptions>
  );
};
export default App;
