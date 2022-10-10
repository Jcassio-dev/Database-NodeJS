const sqliteConnection = require('../../sqlite')

const createUsers = require('./createUsers')


async function migrationRun(){
    const schema = [
        createUsers,
    ].join('')


    sqliteConnection()
    .then(db => db.exec(schema))
    .catch(error => console.log(error))
}


module.exports = migrationRun;