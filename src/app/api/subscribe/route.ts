import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Store in a sorted set, score = timestamp for ordering
    const added = await kv.zadd("subscribers", {
      score: Date.now(),
      member: email.toLowerCase().trim(),
    });

    if (added === 0) {
      return NextResponse.json(
        { message: "Already subscribed", email },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Subscribed successfully", email },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
