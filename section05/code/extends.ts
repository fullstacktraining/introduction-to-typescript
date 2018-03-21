interface IPerson {
  name: string;
}

interface IHero extends IPerson {
  superpower: string;
}

let regularJoe: IPerson = {
  name: "John"
};

let batman: IHero = {
  name: "Bruce",
  superpower: "money"
}