import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get all subscribers from sorted set
    const subscribers = await kv.zrange("subscribers", 0, -1);
    return NextResponse.json({ subscribers });
  } catch (err: any) {
    console.error("Subscribers fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
