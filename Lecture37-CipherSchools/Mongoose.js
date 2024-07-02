const {connect} = require("mongoose");
const MONGO_URL ="mongodb+srv://USer:Smaugop4344%24@cluster0.tu2tkia.mongodb.net";

const DB_NAME = `cs-mern`;

async function connectDB() {
    try{
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log("MONGODB connected");
    }catch(err){
        console.error(err);
    }
};

connectDB();
