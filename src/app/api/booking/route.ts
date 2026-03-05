import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    console.log("New booking received:", body);

    return NextResponse.json(
      { message: "Booking saved successfully" },
      { status: 200 }
    );

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );

  }
}