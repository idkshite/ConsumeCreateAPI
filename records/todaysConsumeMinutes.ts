import { getMongoConnection } from "../mongodb";
import { DateTime } from "luxon";

export async function getTodaysConsumeMinutes() {
  const mongo = await getMongoConnection();

  const today = DateTime.now.toISO();
  
  mongo.collection("records").find()


}