import mongoose from "mongoose";
import { mongoURL } from '../../secret';

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.URL_MONGO || mongoURL);
  } catch (error) {
    return
  }
})();