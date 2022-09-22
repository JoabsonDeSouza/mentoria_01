import { faker } from '@faker-js/faker';

function createRandomLocales() {
  return {
    id: faker.datatype.uuid(),
    username: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.words(10),
    image: faker.image.image(),
    listAvatar: createListAvatar(Math.random() * (7 - 1) + 1),
  };
}

function createListAvatar(number) {
  const list = [];

  for (let i = 0; i < number; i++) {
    list.push(faker.image.avatar());
  }

  return list;
}

export function createList() {
  const list = [];

  for (let i = 0; i < 20; i++) {
    list.push(createRandomLocales());
  }

  return list;
}
