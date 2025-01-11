import prisma from "@/lib/prisma"; // Prisma client
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { userName, email } = await req.json();

    if (!userName || !email) {
      return new Response("Username and email are required", { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response("Email already registered", { status: 400 });
    }

    // Generate a hashed password (optional if you plan to add login)
    const hashedPassword = await bcrypt.hash("defaultpassword", 10);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        name: userName,
        email,
        hashedPassword, // Optional
        role: "FREE", // Default role for newsletter subscribers
      },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
