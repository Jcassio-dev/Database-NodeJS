const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')


async function sqliteConnection(){
    const databae = sqlite.open({
        filename: ''
    })
}