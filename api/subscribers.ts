import type { VercelRequest, VercelResponse } from "@vercel/node";
import { kv } from "@vercel/kv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  // Simple token auth — set ADMIN_SECRET in Vercel env vars
  const token = req.headers.authorization?.replace("Bearer ", "");
  const secret = process.env.ADMIN_SECRET;

  if (!secret || token !== secret) {
    return res.status(401).json({
      error: "Unauthorized",
      debug: {
        hasSecret: !!secret,
        secretLength: secret?.length ?? 0,
        tokenLength: token?.length ?? 0,
        hasAuthHeader: !!req.headers.authorization,
      },
    });
  }

  try {
    const total = await kv.zcard("subscribers");
    // Return all subscribers, newest first
    const subscribers = await kv.zrange("subscribers", 0, -1, { rev: true, withScores: true });

    // zrange with withScores returns [member, score, member, score, ...]
    const list = [];
    for (let i = 0; i < subscribers.length; i += 2) {
      list.push({
        email: subscribers[i],
        subscribedAt: new Date(Number(subscribers[i + 1])).toISOString(),
      });
    }

    return res.status(200).json({ total, subscribers: list });
  } catch (err: any) {
    console.error("List subscribers error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
