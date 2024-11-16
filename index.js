import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(
    () => { console.log('MongoDB is Connected'); 
}).catch(err => {console.log(err);
});


const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(`${PORT}`, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Enable CORS with default settings
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Blogify Pro. Congratulations! The API is running.');
});

// API routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});