import getBook from "../Data/index";
import Button from "../components/UI/Button";

const MainPage = (props) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * 6);
  }

  const randomNumber = getRandomNumber();

  const data = getBook(randomNumber);

  return (
    <div>
      <h3>{data.discription}</h3>
      <Button />
    </div>
  );
};

export default MainPage;
