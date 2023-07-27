import { getBook } from "../Data/index";
import Button from "../components/UI/Button";
import { Card, Col, Row, Space } from "antd";
import TextArea from "../components/UI/TextArea";
import DataTable from "../components/UI/Description";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/data-context";
import Time from "../components/Timer";
import Switch from "../components/UI/Switch";
import { getHardBook } from "../Data/index";

const MainPage = (props) => {
  ////set start/stop/Reset button to show
  const [showButton, setShowButton] = useState(true);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const ctx = useContext(dataContext);
  //// get a random text from data
  const [data, setData] = useState({});
  useEffect(() => {
    function getRandomNumber() {
      return Math.floor(Math.random() * 6);
    }
    const randomNumber = getRandomNumber();
    ctx.switchStatus === false
      ? setData(getBook(randomNumber))
      : setData(getHardBook(randomNumber));
  }, [ctx.switchStatus, ctx.switchSectence]);
  ///////////////

  const statushandler = () => {
    setShowButton(!showButton);
    setShowTable(!showTable);
  };
  const ResetHandler = () => {
    setShowResetButton(!showResetButton);
  };
  ////////////////

  return (
    <Space direction="vertical" size={24}>
      <Card
        size="default"
        title="Typing Speed Game"
        style={{
          width: 600,
        }}
        extra={<Switch />}
      >
        <h3>{data.discription}</h3>
        <TextArea text={data.discription} />
        <br />
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col span={8}>
            {showButton === true && showResetButton === false ? (
              <Button
                modelName={"start"}
                setStatus={statushandler}
                setStatusReset={ResetHandler}
              />
            ) : showButton === false && showResetButton === false ? (
              <Button
                modelName={"finish"}
                setStatus={statushandler}
                setStatusReset={ResetHandler}
              />
            ) : showButton === true && showResetButton === true ? (
              <Button
                modelName={"Restart"}
                setStatus={statushandler}
                setStatusReset={ResetHandler}
              />
            ) : null}
          </Col>
          <Col span={4} offset={12}>
            <Time />
          </Col>
        </Row>

        {showButton === true && showResetButton === true ? <DataTable /> : null}
      </Card>
    </Space>
  );
};

export default MainPage;
