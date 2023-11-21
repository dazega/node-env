const User = require('../../models/user');
const updateUser = async (id, user) => {
    const userInstance = await User.findByPk(id);
    // const userInstance = await User.update({ ...user }, {
    //     where: {
    //         id
    //     }
    // });

    userInstance?.update({ ...user });

    return userInstance;
}

module.exports = updateUser;
