const User = require('../../models/user');
const createUser = async (user) => {
    return User.create(user);
}

module.exports = createUser;
