import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const staffSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255).transform((value) => value.toLowerCase()),
  phone: z.string().trim().min(7).max(30),
  role: z.string().trim().min(1).max(100),
  specialty: z.string().trim().min(1).max(200),
  status: z.string().trim().min(1).max(50).default("Active"),
});

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const staff = await prisma.staff.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.error("STAFF GET ERROR:", error);

    return NextResponse.json(
      { error: "Error fetching staff" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();

    const result = staffSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid staff data",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const staff = await prisma.staff.create({
      data: result.data,
    });

    return NextResponse.json(staff, { status: 201 });
  } catch (error) {
    console.error("STAFF POST ERROR:", error);

    return NextResponse.json(
      { error: "Error creating staff" },
      { status: 500 }
    );
  }
}