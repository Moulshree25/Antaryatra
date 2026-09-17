import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const idSchema = z.coerce.number().int().positive();

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;

    const result = idSchema.safeParse(id);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid staff id" },
        { status: 400 }
      );
    }

    await prisma.staff.delete({
      where: {
        id: result.data,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("STAFF DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}