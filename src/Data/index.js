const data = [
  {
    id: 0,
    discription:
      "Search without limits and message anyone, even if you're not connected",
  },
  {
    id: 1,
    discription: "Even the smallest person can change the course of the future",
  },
  {
    id: 2,
    discription:
      "This day does not belong to one man but to all. Let us together rebuild this world that we may share in the days of peace.",
  },
  {
    id: 3,
    discription:
      "Despair is only for those who see the end beyond all doubt. We do not.",
  },
  {
    id: 4,
    discription: "Who knows? Have patience. Go where you must go, and hope!",
  },
  {
    id: 5,
    discription:
      "May it be a light to you in dark places, when all other lights go out",
  },
];

function getBook(id) {
  return data.find((d) => d.id === id);
}

export default getBook;
