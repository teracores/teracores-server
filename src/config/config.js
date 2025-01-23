import { config } from "dotenv";

config();
export const email = process.env.EMAIL_USER;
export const password = process.env.EMAIL_PASS;
export const Port = process.env.PORT;
export const MongoDB = process.env.MONGODB_URI;
