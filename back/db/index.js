import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://ecommerce:12345@cluster.sjamvbz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

export default connection