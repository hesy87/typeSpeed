import getBook from "../Data/index";
import Button from "../components/UI/Button";
import { Card,Space  } from 'antd';
import TextArea from '../components/UI/TextArea'

const MainPage = (props) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * 6);
  }

  const randomNumber = getRandomNumber();

  const data = getBook(randomNumber);

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
<TextArea text={data.discription}/>
<br/>
<br/>
  <Button />
</Card>
</Space>

  );
};

export default MainPage;
