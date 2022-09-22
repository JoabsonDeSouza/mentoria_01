import { faker } from '@faker-js/faker';

export function createUser() {
  return {
    id: faker.datatype.uuid(),
    username: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.words(10),
    image: faker.image.image(),
    avatar: faker.internet.userName(),
  };
}

export function createList() {
  const list = [];

  for (let i = 0; i < 8; i++) {
    list.push(createUser());
  }

  return list;
}
