import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.booking.delete({
    where: { id: parseInt(params.id) }
  });

  return NextResponse.json({ success: true });
}