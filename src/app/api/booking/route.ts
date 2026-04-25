import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  mode: z.string().min(2).max(100),
  goal: z.string().min(2).max(255),
  practices: z.array(z.string()).optional(),
  notes: z.string().max(255).optional(),
});

export async function POST(req: Request) {
  try {
    const data = bookingSchema.parse(body);

    const { name, email, phone, mode, goal, practices, notes } = data;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        mode,
        goal,
        practices: Array.isArray(practices) ? practices.join(", ") : practices,
        notes: notes || null,
      },
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}