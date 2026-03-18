import Users from '../models/Users.js';

class userService{
    // Método para cadastrar um usuário
    async Create(name, email, password){
        try{
            const newUser = new Users({
                name,
                email,
                password
            });
            await newUser.save();

        } catch(error){
            console.log(error);
        }
    }
}
export default new userService();