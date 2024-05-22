import mysql from "mysql"

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "login",
});

const GetAllUsers = (req, res) => {
    //sql query to display all user to admin
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(`error occured at get users ${err}`); //return error and terminates
        } else {
            res.send(result); //gives the users details
        }
    });
}

const AddNewUser =  (req, res) => {
    //requesting user data from the front-end(postman)
    const params = req.body;
    //sql query to handle new user
    db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [params.name, params.email, params.password],
        (err, result) => {
            if (err) {
                console.log(`error occured at post users ${err}`); //return error and terminates
            } else {
                res.send(`Added user : ${params.name} successfully`); //gives the users details
            }
        }
    );
}

const GetUser = (req, res) => {
    db.query(
        "SELECT * FROM users WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(`error occured at get specific user ${err}`); //return error and terminates
            } else {
                res.send(result); //gives the specific user details
            }
        }
    );
}

const DeleteUser = (req, res) => {
    //sql delete query to delete specific user
    db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(`error occured at get specific user ${err}`); //return error and terminates
        } else {
            res.send(`deleted id : ${req.params.id} successfully`); //delete the selected user details and console
        }
    });
}

export {
    GetAllUsers,
    AddNewUser,
    GetUser,
    DeleteUser
}