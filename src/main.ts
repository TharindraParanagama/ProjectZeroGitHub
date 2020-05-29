//importing modules
import express from "express";
import { path } from "./Routes/routes";
import cors from "cors";
//creating and naming an instance of express object
export const app: any = express();

//making using the router middleware
app.use(cors);
app.use("/", path);
