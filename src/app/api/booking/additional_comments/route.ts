import { NextResponse } from "next/server";
let increment = 0;
const comments: Array<{ id: number; content: string }> = [];
export async function POST() {
  await new Promise((r) => setTimeout(r, 3000));
  increment += 1;
  comments.push({
    id: increment,
    content: "content",
  });
  return NextResponse.json({ status: "ok", content: "content", id: increment });
}

export async function GET() {
  return NextResponse.json({ comments });
}
