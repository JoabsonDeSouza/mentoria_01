import userService from '../service/userService';

class userController {
    static async getAllUser(req, res) {
        try {
            const { count } = req.query;
            const user = await userService.getAllUserService(
                count,
                'user',
            );
            res.status(200).send(user);
        } catch (error) {
            res
                .status(500)
                .send({ message: ' Erro interno controller!', error: error.message });
        }
    }
}

export default userController;