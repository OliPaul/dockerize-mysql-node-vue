//Import Utils
let db = require("../utils/database");
let date = require("../utils/date")
var fs = require('fs');
var appRoot = require('app-root-path');
//Personnalize error message
let dbErrorMsg = "Problème avec la bd";

module.exports = {

    userlist: async function(req, res) {
            //Define query
            sql = "Select * From t_users";
            //Execute query
            let userQuery = await db.doPersonalizedQuery(req, res, sql, dbErrorMsg);

            if (userQuery.error) {
                //Insert Query Failed
                console.log("Erreur: " + userQuery.error_msg);
                return res.status(200).json({ 'error': true, 'error_msg': userQuery.error_msg });
            } else {
                if(userQuery.data.length <= 0){
                    return res.status(200).json({ 'error': true, 'error_msg': "Pas de data" });
                }else{
                    return res.status(200).json({ 'error': false, 'message': "Enjoy your datas !!!", 'data': userQuery.data });
                }
            }
    }
}