
const heroes = [
  {
    id:1,
    name:'Batman',
    owner:'DC',
  },
  {
    id:2,
    name:'Spiderman',
    owner: 'Marvel',
  },
  {
    id:3,
    name:'Superman',
    owner: 'DC',
  },
  {
    id:4,
    name:'Flash',
    owner: 'DC',
  },
  {
    id:5,
    name:'Wolverine',
    owner: 'Marvel',
  },
]

const getHeroesId = (id) => heroes.find((char) => char.id == id);
const getOwnerHeroes = (owner) => heroes.filter((char) => char.owner == owner);

export { getHeroesId, getOwnerHeroes }