import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, phone, mode, goal, practices, notes } = data;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        mode,
        goal,
        practices,
        notes,
      },
    });

    return Response.json({
      success: true,
      bookingId: booking.id,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}