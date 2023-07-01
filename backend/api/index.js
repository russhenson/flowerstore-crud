import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "../routes/routes.js";

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(Router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

