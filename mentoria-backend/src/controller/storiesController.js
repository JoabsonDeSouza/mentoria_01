import storiesService from '../service/storiesService';

class storiesController {
  static async getAllStories(req, res) {
    try {
      const { count } = req.query;
      const stories = await storiesService.getAllStoriesService(
        count,
        'stories',
      );
      res.status(200).send(stories);
    } catch (error) {
      res
        .status(500)
        .send({ message: ' Erro interno controller!', error: error.message });
    }
  }
}

export default storiesController;
