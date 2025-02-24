// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { users } from "../users";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (users.some((u) => u.email === email)) {
      return NextResponse.json(
        { success: false, error: "Email already exists" },
        { status: 409 }
      );
    }

    const newUser: User = { id: uuidv4(), name, email, password };
    users.push(newUser);

    return NextResponse.json({
      success: true,
      data: { id: newUser.id, name, email },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
