// app/api/auth/forgot-password/route.ts
import { NextRequest, NextResponse } from "next/server";
import { users } from "../users";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Email not found" },
        { status: 404 }
      );
    }

    // Simulate sending a reset link (in a real app, send an email)
    console.log(`Reset link sent to ${email}`);
    return NextResponse.json({
      success: true,
      data: { message: "Reset link sent to your email" },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
