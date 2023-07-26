import getBook from "../Data/index";
import Button from "../components/UI/Button";
import { Card, Space } from "antd";
import TextArea from "../components/UI/TextArea";
import DataTable from "../components/UI/Description";
import { useEffect, useState } from "react";

const MainPage = (props) => {
  //// get a random text from data
  const [data, setData] = useState({});
  useEffect(() => {
    function getRandomNumber() {
      return Math.floor(Math.random() * 6);
    }
    const randomNumber = getRandomNumber();
    const data = getBook(randomNumber);
    setData(data);
  }, []);
  ///////////////

  ////set start/stop/Reset button to show
  const [showButton, setShowButton] = useState(true);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showTable, setShowTable] = useState(false);

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
      >
        <h3>{data.discription}</h3>
        <TextArea text={data.discription} />
        <br />
        <br />
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

        {showButton === true && showResetButton === true ? <DataTable /> : null}
      </Card>
    </Space>
  );
};

export default MainPage;
