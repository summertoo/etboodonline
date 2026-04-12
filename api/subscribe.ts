import type { VercelRequest, VercelResponse } from "@vercel/node";
import { kv } from "@vercel/kv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    // Store in a sorted set, score = timestamp for ordering
    const added = await kv.zadd("subscribers", {
      score: Date.now(),
      member: email.toLowerCase().trim(),
    });

    if (added === 0) {
      return res.status(200).json({ message: "Already subscribed", email });
    }

    return res.status(200).json({ message: "Subscribed successfully", email });
  } catch (err: any) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
