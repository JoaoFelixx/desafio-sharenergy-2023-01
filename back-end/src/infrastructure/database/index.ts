import mongoose from "mongoose";

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.URL_MONGO || '');
  } catch (error) {
    return
  }
})();