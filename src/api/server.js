import express from "express";
import { Port } from "../config/config.js";
import connectMongo from "../db/connectMongoose.js";
import formRoutes from "../routes/formRoutes.js";
const app = express();
app.use(express.json());
const port = Port || 3000;
connectMongo();

app.use("/form", formRoutes);

app.get("/", (req, res) => {
  res.send("Server is listening");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
