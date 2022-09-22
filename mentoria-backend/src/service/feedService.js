import getlistFake from '../helpers/index';


class feedService {
    static getAllFeedService(count, type) {
        try {
            return getlistFake(count, type);
        } catch (error) {
            return { message: ' Erro interno service! ', error: error.message };
        }
    }
}
export default feedService;