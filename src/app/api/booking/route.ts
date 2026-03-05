import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, className, date, time } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // For MVP: log booking
  console.log("New Booking:", body);

  return NextResponse.json({ success: true });
}