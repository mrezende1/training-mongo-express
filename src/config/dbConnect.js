import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mateus:123@cluster0.kllmgac.mongodb.net/treino-node");

let db = mongoose.connection;

export default db;