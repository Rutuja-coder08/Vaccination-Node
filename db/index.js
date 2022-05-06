const { connect } = require("mongoose");

const mongoURI = "mongodb+srv://Rutuja:TURwOaU0gGRSFb8i@cluster0.0afbj.mongodb.net/brillio-db?retryWrites=true&w=majority";

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)