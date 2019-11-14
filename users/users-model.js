const db = require('../data/db-config')

const find = () => {
    return db('users')
}

const findBy = filter => {
    return db('users').where(filter).first()
}

const findById = id => {
    return db('user').where({ id }).first()
}

async const add = (user) => {
    const [id] = await db('users')
        .insert(user)

    return findByid(id)
}

module.exports = {
    add,
    find,
    findBy,
    findByid
}