import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {

    const data = await req.json();

    const { name, email, phone, mode, goal, practices, notes } = data;

    const query = `
      INSERT INTO bookings
      (name,email,phone,mode,goal,practices,notes)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING id
    `;

    const values = [
      name,
      email,
      phone,
      mode,
      goal,
      practices,
      notes
    ];

    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      bookingId: result.rows[0].id
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }
}