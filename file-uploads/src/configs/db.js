const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://localhost:27017/web13-fileuploads",
  {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
};
