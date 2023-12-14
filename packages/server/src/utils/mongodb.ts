import mongoose from "mongoose";

export const connectToDB = (): void => {
  const mongoURL: string | undefined = process.env.MONGODB_URL;

  if (!mongoURL) {
    console.error("MongoDB URL is not provided.");
    return;
  }

  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongoURL)
    .then((res) => console.log(`Connected to MongoDB: ${res.connection.host}`))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};
