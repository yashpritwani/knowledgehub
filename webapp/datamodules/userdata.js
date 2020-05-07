var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ypritwani:Yash2904%40@knowledgehub-database-zu4vn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cno: Number,
    dob: Number,
    password: String,
    cpassword: String,
    random: Number
});
var userdata = mongoose.model('UserData', userSchema);
module.exports = userdata;
