import feedService from '../service/feedService';

class feedController {
  static async getAllFeed(req, res) {
    try {
      const { count } = req.query;
      const feed = await feedService.getAllFeedService(count, 'feed');
      res.status(200).send(feed);
    } catch (error) {
      res
        .status(500)
        .send({ message: ' Erro interno controller!', error: error.message });
    }
  }
}

export default feedController;
