import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { connectDB } from "../../../lib/db";
import Project from "../../../models/Project";

export async function POST(req: Request) {

  try {

    await connectDB();

    const authHeader =
      req.headers.get("authorization");

    if (!authHeader) {

      return NextResponse.json(
        { message: "No token" },
        { status: 401 }
      );

    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: string };

    const { title, description } =
      await req.json();

    const project =
      await Project.create({

        title,
        description,
        owner: decoded.userId,

      });

    return NextResponse.json({

      success: true,
      project,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Create failed" },
      { status: 500 }
    );

  }
}
export async function GET(req: Request) {

  try {

    await connectDB();

    const authHeader =
      req.headers.get("authorization");

    if (!authHeader) {

      return NextResponse.json(
        { message: "No token" },
        { status: 401 }
      );

    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: string };

    const projects =
      await Project.find({
        owner: decoded.userId,
      }).sort({
        createdAt: -1,
      });

    return NextResponse.json({

      success: true,
      projects,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Fetch failed" },
      { status: 500 }
    );

  }
}