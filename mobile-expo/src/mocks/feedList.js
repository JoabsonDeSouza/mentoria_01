import { faker } from '@faker-js/faker';

function createPublish() {
  return {
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.words(10),
    imagePublish: faker.image.image(),
    imageProfile: faker.image.avatar(),
    likers: getNumberRandom(100),
    location: faker.address.city(),
    comments: `${getNumberRandom(9)}k`,
  };
}

function getNumberRandom(max) {
  return parseInt(Math.random() * (max - 1) + 1);
}

export function createList() {
  const list = [];

  for (let i = 0; i < 20; i++) {
    list.push(createPublish());
  }

  return list;
}
