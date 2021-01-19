const mongoose = require('mongoose');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  };

  const conn = await mongoose.connect(process.env.MONGO_URI, options);
  
  console.log(`Mongo DB connected ${conn.connection.host}`.yellow.underline);
}

module.exports = connectDB;