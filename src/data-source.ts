import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Post } from "./entity/Post";
import { Comment } from "./entity/Comments";
config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST ?? "localhost",
  port: Number(`${process.env.PGPORT}`) ?? 5432,
  username: process.env.PGUSER ?? "postgres",
  password: process.env.PGPASSWORD ?? "password12",
  database: process.env.PGDATABASE ?? "reddit",
  synchronize: true,
  logging: true,
  entities: [Post, Comment],
  migrations: [],
  subscribers: [],
  cli: {
    migrationsDir: "src/migration",
  },
});
