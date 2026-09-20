import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

const bookingSchema = z.object({

  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .regex(
      /^[A-Za-z\s]+$/,
      "Name must contain only letters"
    ),

  email: z
    .string()
    .trim()
    .regex(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Only Gmail addresses allowed"
    ),

  phone: z
    .string()
    .regex(
      /^\d{10}$/,
      "Phone must be exactly 10 digits"
    ),

  mode: z.string(),

  goal: z.string().optional(),

  practices:
    z.array(
      z.string()
    ).optional(),

  notes:
    z.string()
    .optional()

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
    const session = await auth();
    const redirectTo = session?.user?.role === "ADMIN" ? "/admin" : "/booking/success";
    const body = await req.json();
    const data = bookingSchema.parse(body);

    const { name, email, phone, mode, goal, practices, notes } = data;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        mode,
        goal: goal || "",
        practices: practices ? practices.join(", ") : "",
        notes: notes || "",
      },
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      redirectTo,
    });

  }

  catch (error) {

  console.error(error);

  if (error instanceof z.ZodError) {

    return NextResponse.json(
      {
        success: false,
        message:
          error.errors[0]?.message
      },
      {
        status: 400
      }
    );

  }

  return NextResponse.json(
    {
      success: false,
      message:
        "Something went wrong"
    },
    {
      status: 500
    }
  );

}
}

