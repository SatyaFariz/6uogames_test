const express = require("express");
var mysql = require("sync-mysql");
const crypto = require("crypto");

module.exports = {

    welcome: (req, res, next) => {
	    
        return res.status(200).send({
            message: "Welcome to 6uo Games API."
        });

    }
};
