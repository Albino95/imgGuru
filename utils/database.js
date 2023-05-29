import mongoose from "mongoose";

let isConnected = false; // check if we are connected

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  console.log("IT IS CONNECTED")
  if (isConnected) {
    console.log("Already Connected to the database");
    return;
  }

  try {
    console.log("Establishing connection")
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "image gallery",
      useNewUrlParser: true,
      useUnifiedTopology: true

    })
    
    isConnected=true
    console.log("Connection successful")
    
  } catch (error) {
    console.log("Impossible to connect due to: ", error)
  }
}