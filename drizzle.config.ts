import type { Config } from "drizzle-kit";
export default {
	schema: "./db/auth-schema.ts",
	out: "./db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
} satisfies Config;
