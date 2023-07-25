import React, { useState } from "react";
import { PoweroffOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Button } from "antd";

const App = () => {
  const [ButtonLogo,setButtonLogo] = useState(true)
  const [ButtonColor,setButtonColor] = useState(true)
  const [ButtonText,setButtonText] = useState(true)
  const enterLoading = () => {
    setButtonLogo(!ButtonLogo)
    setButtonColor(!ButtonColor)
    setButtonText(!ButtonColor)
  };
  return (
    <Button
      type="primary"
      icon={ButtonLogo ? <FieldTimeOutlined /> :  <PoweroffOutlined />}
      onClick={() => enterLoading()}
      style={ButtonColor ?{background:"blue"} : {background:"red"}}
      size="large"
    >
      {ButtonLogo ? 'START !' :  'STOP !'}
    </Button>
  );
};
export default App;

/* <PoweroffOutlined />; */
