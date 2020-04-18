let mongoose = require("mongoose");

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
// Set environment variables
let env = process.env.NODE_ENV;

if (env === "production") {
  // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
  const username = ""; /** load this from .env */
  const password = "";
  mongoose.connect(
    `mongodb://${username}:${password}@ds161630.mlab.com:61630/passport`
  );
} else {
  mongoose.connect("mongodb://localhost:27017/bl_oauth"),
    {
      useMongoClient: true,
    };
}

// Signal connection
mongoose.connection
  .once("open", function () {
    console.log("Connection has been made");
  })
  .on("error", function (error) {
    console.log("Connect error", error);
  })
  .on("disconnected", function () {
    console.log("Connection disconnected");
  });

module.exports = mongoose;
