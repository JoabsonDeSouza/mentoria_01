import { faker } from '@faker-js/faker';

export default function getlistFake(count, type) {
  return new Promise((resolve, reject) => {
    try {
      const list = [];
      const minimumElements = 3;

      Array(Number(count) || minimumElements)
        .fill()
        // eslint-disable-next-line array-callback-return
        .map(() => {
          faker.locale = 'pt_BR';
          const data = {
            name: faker.name.fullName(),
            image: faker.image.nightlife(),
          };

          switch (type) {
            case 'stories':
              const story = {
                ...data,
                status: true,
              };
              list.push(story);
              break;

            case 'feed':
              const limitNumber = 1000000;
              const feed = {
                ...data,
                description: faker.company.catchPhraseAdjective(),
                total_likes: Math.floor(limitNumber * Math.random() + 1),
                total_comments: Math.floor(limitNumber * Math.random() + 1),
              };
              list.push(feed);
              break;

            case 'user':
              const user = {
                ...data,
                nickname: `${data.name}_${faker.name.lastName()}`,
                phone: faker.phone.number('+55 65 ##### ####'),
                email: faker.internet.email(data.name),
              };
              list.push(user);
              break;

            case 'suggests':
              const randomNumber = 1000000;
              const suggests = {
                ...data,
                description1: faker.company.catchPhraseAdjective(),
                total_likes1: Math.floor(randomNumber * Math.random() + 1),
                total_comments1: Math.floor(randomNumber * Math.random() + 1),
              };
              list.push(suggests);
              break;

            default:
              break;
          }
        });

      // eslint-disable-next-line no-promise-executor-return
      return resolve(list);
    } catch (err) {
      // eslint-disable-next-line no-promise-executor-return
      return reject(err);
    }
  });
}
