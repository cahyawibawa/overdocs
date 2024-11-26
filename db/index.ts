import * as schema from "@/db/auth-schema";
import { neon } from "@neondatabase/serverless";
import { type NeonHttpDatabase, drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema }) as NeonHttpDatabase<typeof schema>;

export default db;
