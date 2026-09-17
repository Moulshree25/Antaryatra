import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z
    .string()
    .trim()
    .email()
    .max(255)
    .transform((value) => value.toLowerCase()),
  phone: z.string().trim().min(7).max(30),
  mode: z.string().trim().min(1).max(100),
  goal: z.string().trim().max(500).default(""),
  practices: z.string().trim().max(1000).default(""),
  notes: z.string().trim().max(2000).default(""),
});

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("BOOKINGS GET ERROR:", error);

    return NextResponse.json(
      { error: "Error fetching bookings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid booking data",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: result.data,
    });

    return NextResponse.json(
      booking,
      { status: 201 }
    );
  } catch (error) {
    console.error("BOOKINGS POST ERROR:", error);

    return NextResponse.json(
      { error: "Error creating booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();

    const idSchema = z.object({
      id: z.coerce.number().int().positive(),
    });

    const result = idSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid booking id" },
        { status: 400 }
      );
    }

    await prisma.booking.delete({
      where: {
        id: result.data.id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("BOOKINGS DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Error deleting booking" },
      { status: 500 }
    );
  }
}