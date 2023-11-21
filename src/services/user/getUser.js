const User = require('../../models/user');
const getUser = async (id) => {
    try {
        const user = await User.findByPk(id);

        return user;
    }
    catch {

    }
}

module.exports = getUser;