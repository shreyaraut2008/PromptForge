import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/db";
import User from "@/models/user";

export async function GET(req: Request) {
  try {

    await connectDB();

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: string };

    const user = await User.findById(
      decoded.userId
    ).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}