import mongoose from 'mongoose';

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (mongoose.connection.readyState >= 1) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
        // Consider adding more robust error handling here
    }
}
