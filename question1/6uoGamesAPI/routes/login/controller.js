const express = require("express");
var mysql = require("sync-mysql");
const crypto = require("crypto");

var platformMysqlconfig = require("../javascripts/platformMysql_config");

var platformMysqlConnection = new mysql(platformMysqlconfig);

module.exports = {

    login: (req, res, next) => {

	    const email = req.body.email;
        const password = req.body.password;

        try{

            var results = platformMysqlConnection.query(
                `SELECT * FROM authentication WHERE email = "${email}"`
            );

            if (results && results.length){

                const hash = crypto.pbkdf2Sync(password, results[0].salt, 1000, 64, 'sha512').toString('hex');

                if (hash == results[0].hash){
                    // correct password

                    // generate session token
                    var token = crypto.randomBytes(32).toString('hex');

                    return res.status(200).send({
                        message: "Success",
                        session: token
                    });

                }

            }

            return res.status(401).send({
                message: "Email or password is incorrect."
            });

        }catch (e){
            console.log(e);
            return res.status(400).send({
                message: "Bad Request"
            });
        }

    }
};
