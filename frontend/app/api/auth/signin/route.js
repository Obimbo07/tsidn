import prisma from "@/lib/prisma"; // Prisma client instance
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response("Email and password are required", { status: 400 });
    }

    // Find user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response("Invalid email or password", { status: 401 });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return new Response("Invalid email or password", { status: 401 });
    }

    // Return user info (or token if using JWTs)
    return new Response(
      JSON.stringify({
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Sign-in error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
