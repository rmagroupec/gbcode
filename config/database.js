// const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require('mongoose');
// const uri = "mongodb+srv://gravitybites:<password>@gravitybites.pp9np1t.mongodb.net/gravityBites?retryWrites=true&w=majority";
const env1 = require("dotenv").config();

// const client = new MongoClient(process.env.DATABASE_URL, 
//   {useNewUrlParser: true,useUnifiedTopology: true});
const dbConnect = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await mongoose.connect(process.env.DATABASE_URL).then(() => {
          console.log("Database connected established");
        }).catch((err) =>{
          console.log(err);
        });
        // Send a ping to confirm a successful connection
        // await client.db("GravityBites1").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
      }
}

module.exports = dbConnect;