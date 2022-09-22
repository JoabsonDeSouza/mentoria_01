import getlistFake from '../helpers/index';

class storiesService {
  static getAllStoriesService(count, type) {
    try {
      return getlistFake(count, type);
    } catch (error) {
      return { message: ' Erro interno service! ', error: error.message };
    }
  }
}
export default storiesService;
