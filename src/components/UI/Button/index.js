import React, { useState } from "react";
import { PoweroffOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Button } from "antd";

const App = () => {
  const enterLoading = () => {};
  return (
    <Button
      type="primary"
      icon={<FieldTimeOutlined />}
      onClick={() => enterLoading()}
    >
      START !
    </Button>
  );
};
export default App;

/* <PoweroffOutlined />; */
