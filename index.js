import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import feedbacksRoute from "./routes/feedbacks.js";
import rentalsRoute from "./routes/rentals.js";
import welcomeRouter from "./routes/welcome.js";
// import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
const pt="mongodb+srv://aimprakhar:zM2nU@cluster10.pkcyb5d.mongodb.net/?retryWrites=true&w=majority";

dotenv.config();

const connect = async () => {
  //   console.log(process.env.MONGO);
  try {
    await mongoose.connect(process.env.MONGO||pt);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("there is error");
    throw error;
  }
};


app.use(cors());
// app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/feedbacks", feedbacksRoute);
app.use("/api/rentals", rentalsRoute);
app.use('/api/welcome', welcomeRouter);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("hello first request");
});

const PORT = process.env.PORT || 8700;
app.listen(PORT, () => {
  console.log(`connected to server at port${PORT}`);
  connect();
});

// const PORT = 8800;
// const HOST = "localhost";

// const API_URL = "localhost/8800/api";

// // app.get("/status", (req, res, next) => {
// //     res.send('This is a proxy service');
// // });

// const proxyOptions = {
//     target: API_URL,
//     changeOrigin: true,
//     // pathRewrite: {
//     //     [`^/api/posts`]: '/posts',
//     // },
// }

// const proxy = createProxyMiddleware(proxyOptions);

// app.listen(PORT, HOST, () => {
//     console.log(`Proxy Started at ${HOST}:${PORT}`)
// });

