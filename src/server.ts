import app from "./app";

// const mongoose = require("mongoose");
import mongoose from "mongoose"
require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(process.env.port, () => {
      console.log(`Example app listening on port ${process.env.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main()