import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  mode: z.string(),

  goal: z.string().optional(),               
  practices: z.array(z.string()).optional(), 
  notes: z.string().optional()               
});

// ✅ GET (for admin dashboard)
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// ✅ POST (for booking form)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    const { name, email, phone, mode, goal, practices, notes } = data;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        mode,
        goal,
        practices: practices ? practices.join(", ") : "",
        notes: notes || "",
      },
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}