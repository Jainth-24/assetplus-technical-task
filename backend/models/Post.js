var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
       title: String,
       imgUrl: String,
       desc: String

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)