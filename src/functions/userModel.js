const mongoose = require('mongoose');

//Creating user model

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number, required: true}
});

const User = new mongoose.model('User', userSchema);

//Controller function
const createUser = async (firstName, email, password, age) => {
    try {
        const user = new User({firstName, email, password, age});
        await user.save(); // Add await here
        return user;
    } catch (error) {
        throw new Error('Something went wrong creating a new user!');
    }
};

module.exports = { User, createUser };