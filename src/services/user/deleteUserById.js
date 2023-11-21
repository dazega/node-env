const User = require('../../models/user');
const deleteUserById = async (id) => {
    try {
        await User.destroy({
            where:{
                id
            }
        });
    }
    catch(error) {

    }
}

module.exports = deleteUserById;
