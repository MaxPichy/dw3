import mongose from 'mongoose';

const userSchema = new mongose.Schema({
    name: String,
    email: String,
    password: String
});

const Users = mongose.model('Users', userSchema);

export default Users;