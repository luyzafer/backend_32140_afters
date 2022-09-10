const add = (n1, n2) => n1 + n2;

const gameList = [
  {
    id: 1,
    title: "Age of Empires III",
    platform: "PC",
    price: 350,
  },
  {
    id: 2,
    title: "Age of Empires II",
    platform: "PC",
    price: 300,
  },
  {
    id: 3,
    title: "GTA V",
    platform: "Xbox One",
    price: 600,
  },
];

const totalAmountArray = (list, operation, key) => {
  let total = 0;

  list.forEach((element) => {
    total = operation(total, element[key]);
  });

  return total;
};

const resultado = totalAmountArray(gameList, add, "price");

console.log({ resultado });
