import { Request, Response } from "express";
import { DateTime } from "luxon"
import { createRecordHandler } from "./records/createRecord";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(function(req, res, next) {
  if (req.header("Authorization") !== process.env.API_KEY) {
    res.status(403).send("Invalid API Key")
  }
  next();
});

app.post('/record/start', (req: Request, res: Response) => createRecordHandler(req, res, "start"))
app.post('/record/stop', (req: Request, res: Response) => createRecordHandler(req, res, "stop"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})