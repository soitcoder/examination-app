const mongoose = require("mongoose");
require('dotenv').config()
const MONGOURI =
"mongodb+srv://soit_coder1:B5UKOtXAiIUKjy4h@cluster0.cpiywhg.mongodb.net/?retryWrites=true&w=majority"

//B5UKOtXAiIUKjy4h

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
