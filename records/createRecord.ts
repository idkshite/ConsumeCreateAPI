import { Request, Response } from "express";
import { getMongoConnection } from "../mongodb";
import { DateTime } from "luxon"

type FocusRecordType = "start" | "stop"

type FocusRecord = {
  focus: "consume" | "create"
  time: string
  type: FocusRecordType
}

export async function createRecordHandler(req: Request, res: Response, type: FocusRecordType) {

  const mongo = await getMongoConnection();

  const focus = req.body?.focus;
  const time = DateTime.fromISO(req.body?.calledAt, { zone: "utc" }).toISO();

  const record: FocusRecord = { focus, time, type }

  await mongo.collection("records").insertOne(record);

  res.send(JSON.stringify({ ok: true }))

}