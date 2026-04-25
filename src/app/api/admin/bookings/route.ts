import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(bookings);
  } catch (error) {
    return new Response("Error fetching bookings", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.booking.delete({
      where: { id },
    });

    return Response.json({ success: true });
  } catch (error) {
    return new Response("Error deleting booking", { status: 500 });
  }
}