const User = require('../../models/user');
const getUsers = async () => {
    const users = await User.findAll();

    return users;
};

module.exports = getUsers;
