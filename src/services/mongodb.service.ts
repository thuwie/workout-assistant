import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';

@Injectable()
export class MongodbService {
  private client!: MongoClient;

  private currDb!: Db;

  private collections!: Collection[];

  public usersCollection!: Collection;

  private mongoUrl!: string;

  private dbName!: string;

  private usersCollectionName: string = 'users';

  async init(url: string) {
    this.mongoUrl = url;
    this.dbName = `${process.env.MONGO_DB}`;
    this.client = new MongoClient(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await this.client.connect();
    this.currDb = this.client.db(this.dbName);
    this.usersCollection = this.currDb.collection(this.usersCollectionName);
  }

  get mongoClient() {
    return this.client;
  }
}
