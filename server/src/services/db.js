import mongoose from "mongoose";

export const connectDB = (uri) => {
    mongoose.Promise = Promise;
    mongoose.connect(uri).then(() => console.log('database connected'))
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
    });
};