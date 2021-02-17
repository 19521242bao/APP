var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "App"
})

connect.connect(function (err) {
    if (err) throw err;
    let sql = "CREATE TABLE user (userid varchar(255) NOT NULL,fullname varchar(255) NOT NULL,birth datetime DEFAULT NULL, email varchar(255) DEFAULT NULL,gender varchar(4) DEFAULT NULL,Created_at datetime DEFAULT NULL,password varchar(255) DEFAULT NULL,   PRIMARY KEY (userid))";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log("CREATE SUCCESSFUL")
    })
});

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = "CREATE TABLE todo (id varchar(255) NOT NULL, title varchar(255) DEFAULT NULL, description varchar(255) DEFAULT NULL, created_at datetime DEFAULT NULL, updated_at datetime DEFAULT NULL, PRIMARY KEY (id))";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
//     })
// });

