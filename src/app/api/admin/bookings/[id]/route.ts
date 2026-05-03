import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {

    const bookingId = Number(params.id);

    if (isNaN(bookingId)) {
      return NextResponse.json(
        { error: "Invalid booking id" },
        { status: 400 }
      );
    }

    await prisma.booking.delete({
      where: {
        id: bookingId
      }
    });

    return NextResponse.json({
      success: true
    });

  } catch (error) {

    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );

  }
}