/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { neon } from '@neondatabase/serverless';
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.DB_URL!);
const db = drizzle(sql, {schema}) as NeonHttpDatabase<typeof schema>;

export default db