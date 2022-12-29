import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO || '');
    console.log('Successful connection with DB')
  } catch (error) {
    return
  }
})();