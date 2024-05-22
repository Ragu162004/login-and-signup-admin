import { GetAllUsers, AddNewUser, GetUser, DeleteUser} from "./routes/route.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get("/users", GetAllUsers);

//add new user
app.post("/newuser", AddNewUser);

//get specific user information
app.get("/user/:id", GetUser);


//delete specific user
app.delete("/user/:id", DeleteUser);



app.listen(8000, () => {
    console.log(`Server running at http://localhost:${port}`);
});
