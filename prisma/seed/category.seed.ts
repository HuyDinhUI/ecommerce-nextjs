import { prisma } from "@/utils/prisma";

export async function seedCategory() {
  await prisma.category.createMany({
    data: [
      { slug: "t-shirt", name: "T-Shirt" },
      { slug: "shirt", name: "Shirt" },
      { slug: "polo", name: "Polo" },
      { slug: "jeans", name: "Jeans" },
      { slug: "jacket", name: "Jacket" },
      { slug: "short", name: "Short" },
      { slug: "coat", name: "Coat" },
      { slug: "suit", name: "Suit" },
    ],
    skipDuplicates: true,
  });
}


