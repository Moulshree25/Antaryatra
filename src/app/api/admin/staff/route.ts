import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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

    const {
      name,
      email,
      phone,
      role,
      specialty,
      status,
    } = body;

    if (!name || !email || !phone || !role || !specialty) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const staff = await prisma.staff.create({
      data: {
        name,
        email,
        phone,
        role,
        specialty,
        status: status || "Active",
      },
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