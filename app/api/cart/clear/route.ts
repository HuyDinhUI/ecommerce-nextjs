import { authOptions } from "@/lib/auth";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Please login" }, { status: 400 });

  await prisma.cart.deleteMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({ message: "Delete is success" }, { status: 200 });
}
