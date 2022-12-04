import "reflect-metadata";

import { DataSource } from "typeorm";

import path from "path";
import { fileURLToPath } from "url";

import "dotenv/config"

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_USER,
  entities: [__dirname + "/entity/**/*{.ts,.js}"],
  migrations: [__dirname + "/migration/**/*.ts"],
  synchronize: true,
  logging: false,
});
