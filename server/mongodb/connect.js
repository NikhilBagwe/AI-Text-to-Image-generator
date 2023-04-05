import mongoose from 'mongoose';

const connectDB = (url) => {
  // useful when working with search functionality
  mongoose.set('strictQuery', true);

  // connect mongodb
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;