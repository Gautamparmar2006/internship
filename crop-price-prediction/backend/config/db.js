const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "crop_prediction",
    port: 3306

});

db.connect((err)=>{

    if(err){

        console.log("MariaDB Connection Failed");
        console.log(err);

    }
    else{

        console.log("MariaDB Connected Successfully");
    }

});

module.exports = db;