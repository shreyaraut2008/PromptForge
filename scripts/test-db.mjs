import dns from "dns";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, "..", ".env.local");

dns.setDefaultResultOrder("ipv4first");

const env = fs.readFileSync(envPath, "utf8");
for (const line of env.split(/\r?\n/)) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, "");
  }
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.log("FAILED: MONGODB_URI not set");
  console.log("env file:", envPath, "exists:", fs.existsSync(envPath));
  process.exit(1);
}

console.log("URI scheme:", uri.split("://")[0]);

try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 15000 });
  console.log("CONNECTED");
  await mongoose.disconnect();
} catch (error) {
  const err = error;
  console.log("FAILED:", err.code ?? "unknown", err.message);
  process.exit(1);
}
