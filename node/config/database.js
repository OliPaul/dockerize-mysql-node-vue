//Create Mysql Database Connection
let dbParams = {
    host: 'database',
    port: 3306,
    user: 'root',
    password: 'root',
    database: "users",
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
}

exports.dbParams = dbParams