const mongoose = require('mongoose');

var dotenv = require('dotenv');

// Load .env
dotenv.config({path: "./model/.env"});
const pwd = process.env.password;
const uri = `mongodb+srv://BlackSmithOP:${pwd}@cluster0.fk3pw.mongodb.net/Tests`;


mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email : String,
});

var UserData = mongoose.model('user',UserSchema);

module.exports = UserData;