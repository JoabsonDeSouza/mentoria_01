import suggestsService from '../service/suggestsService';

class suggestsController {
  static async getAllSuggests(req, res) {
    try {
      const { count } = req.query;
      const suggests = await suggestsService.getAllSuggestsService(
        count,
        'suggests',
      );
      res.status(200).send(suggests);
    } catch (error) {
      res
        .status(500)
        .send({ message: ' Erro interno controller!', error: error.message });
    }
  }
}

export default suggestsController;
