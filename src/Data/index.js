const dataEasy = [
  {
    id: 0,
    discription:
      "I plan to go to Boston whether Tom wants to go with me or not",
  },
  {
    id: 1,
    discription:
      "I wonder whether or not Tom knew it was a bad idea to do that",
  },
  {
    id: 2,
    discription:
      "My weight now is the same as it was when I was in high school",
  },
  {
    id: 3,
    discription:
      "Do you think Tom would go to Boston with me if I asked him to",
  },
  {
    id: 4,
    discription:
      "I want to know what to do with all the stuff you left with me",
  },
  {
    id: 5,
    discription:
      "The only job that Tom has ever had is the one that he has now",
  },
];

const dataHard = [
  {
    id: 0,
    discription:
      "Tom can't help wondering whether he would've been better off if he'd gone to college.",
  },
  {
    id: 1,
    discription:
      "Tom claimed that he didn't know his beach house was being used for illegal activities. ",
  },
  {
    id: 2,
    discription:
      "Tom usually sits at the kitchen table and eats cereal while reading the morning paper",
  },
  {
    id: 3,
    discription:
      "Tom and Mary were walking down the path with fishing poles slung over their shoulders",
  },
  {
    id: 4,
    discription:
      "Tom didn't seem to be at all interested in Mary's explanation about what had happened",
  },
  {
    id: 5,
    discription:
      "Sometimes you don't need to speak the same language in order to understand each other",
  },
];

export const getBook = (id) => {
  return dataEasy.find((d) => d.id === id);
};

export const getHardBook = (id) => {
  return dataHard.find((d) => d.id === id);
};
