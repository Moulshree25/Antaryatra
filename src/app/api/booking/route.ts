import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        goal: body.goal || null,
        level: body.level || null,
        practice: body.practice || null,
        chakra: body.chakra || null,
        notes: body.notes || null
      }
    })

    return NextResponse.json({
      success: true,
      booking
    })

  } catch (error) {

    console.error("BOOKING ERROR:", error)

    return NextResponse.json(
      { error: "Booking failed" },
      { status: 500 }
    )

  }

}