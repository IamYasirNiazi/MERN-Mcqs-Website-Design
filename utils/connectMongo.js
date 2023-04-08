import mongoose from 'mongoose';

const connectMongo = async () =>{
    await mongoose.connect(process.env.MONGODB_URI);
}

export default connectMongo;








/*

import mongoose from 'mongoose';

const connectMongo = async () =>{

await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

}

export default connectMongo;

*/
