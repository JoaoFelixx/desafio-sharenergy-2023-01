import mongoose from "mongoose";
import { mongoURL } from '../../secret';

(async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO || mongoURL);
    console.log('Successful connection with DB')
  } catch (error) {
    return
  }
})();