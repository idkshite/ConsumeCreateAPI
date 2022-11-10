import { MongoClient } from 'mongodb'

const password = process.env.MONGODB_PASSWORD

const url = `mongodb+srv://admin:${password}@conversation-recorder.iubth.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

// Database Name
const dbName = 'experiment';

let mongoPromise: Promise<any>;

export async function getMongoConnection() {
  if (!mongoPromise) {
    mongoPromise = createMongoConnection()
  }
  return mongoPromise;
}

async function createMongoConnection() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  return db;
}

createMongoConnection()
  .then(() => { })
  .catch(console.error)
  .finally(() => client.close());