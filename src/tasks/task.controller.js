const users = []

let id = 1

const findAllUsers = () => {
    return users
}

const findUsersById = (id) => {
    const user = users.find(item => item.id == id)
    return user
}

const createUsers = data => {
    const newUser = {
        id: id++,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday 
    }
    users.push(newUser)
    return newUser
}

const updateUsers = (id,data) => {
    const user = users.find(user => user.id == id) //? aca saco el usuario que quiero cambiar
    const index = users.indexOf(user) //? aca saco el index que quiero editar

    const editedUser = {
        id:parseInt(id),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password:data.password,
        birthday: data.birthday
    }

    users.splice(index,1,editedUser)
    return editedUser
}

const deleteUsers = (data) => {
    const index = users.indexOf(data)
    users.splice(index,1)
    return users
}



module.exports = {
    findAllUsers,
    findUsersById,
    createUsers,
    deleteUsers,
    updateUsers
}