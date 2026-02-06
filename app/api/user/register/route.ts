import { RegisterSchema } from "@/schemas/auth.schema";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RegisterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 400 });
  }

  const { email, password, firstName, lastName } = parsed.data;

  const existed = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existed) {
    return NextResponse.json({ message: "Email is existed" }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name: firstName + " " + lastName,
    },
  });

  return NextResponse.json(
    { message: "Register is success", data: user },
    { status: 200 },
  );
}
