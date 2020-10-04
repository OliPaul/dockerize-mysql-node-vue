//Including mysql Library
let mysql = require("mysql");
let dbParams = require("../config/database");
//Create Mysql Database Connection
let db = mysql.createConnection(dbParams.dbParams);

/*
    doQuery Func
    This function is used to execute simple sql query in your database
    and send http response to any client
*/
function doQuery(req, res, sql, { dbErrorMsg }) {
    db.query(sql, function(err, result) {
        if (err) {
            //Probably a database error
            console.log("dbError: ", err);
            return res.status(200).json({ 'error': true, 'error_msg': dbErrorMsg ? dbErrorMsg : "We have encoutered a problem with database" });
        } else {
            //Parse result json
            let dbResult = JSON.parse(JSON.stringify(result));
            console.log("dbResult: ", dbResult);

            return res.status(200).json({ 'error': false, 'data': dbResult });
        }
    });
}
/*
    doPersonalizedQuery Func
    This function is used to execute simple sql query in yor database
    and return json object
    Cases:
    - If we have 'err' after db execution return a json like that {'error': true, 'error_msg': 'err message' }
    - If we don't have 'err' after db execution return a json like that {'error': false, 'data': dbResult }
*/
async function doPersonalizedQuery(req, res, sql, { dbErrorMsg }) {
    var queryResult;
    db.query(sql, function(err, result) {
        if (err) {
            //Probably a database error
            console.log("dbError: ", err);
            queryResult = { 'error': true, 'error_msg': dbErrorMsg ? dbErrorMsg : "We have encoutered a problem with database" };
            //return queryResult;
        } else {
            //Parse result json
            let dbResult = JSON.parse(JSON.stringify(result));
            console.log("dbResult: ", dbResult);
            queryResult = { 'error': false, 'data': dbResult };
            //return queryResult;
        }
    });
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 100));
    return queryResult;
}

module.exports = {
    doQuery,
    doPersonalizedQuery
}