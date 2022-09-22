import { faker } from '@faker-js/faker';

export const stories = [
  {
    id: '0',
    uri: faker.image.avatar(),
    hasStory: true,
    canAddNewStory: true,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '1',
    uri: faker.image.avatar(),
    hasStory: true,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '2',
    uri: faker.image.avatar(),
    hasStory: true,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '3',
    uri: faker.image.avatar(),
    hasStory: true,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '4',
    uri: faker.image.avatar(),
    hasStory: true,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '5',
    uri: faker.image.avatar(),
    hasStory: false,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '6',
    uri: faker.image.avatar(),
    hasStory: false,
    name: `${faker.name.firstName()}`,
  },
  {
    id: '7',
    uri: faker.image.avatar(),
    hasStory: false,
    name: `${faker.name.firstName()}`,
  },
].sort((itemA, itemB) => Number(itemB.hasStory) - Number(itemA.hasStory));
