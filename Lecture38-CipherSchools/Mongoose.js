const {connect} = require("mongoose");
const MONGO_URL ="mongodb://localhost:27017/Task";

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
