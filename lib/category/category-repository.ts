import { prisma } from "@/utils/prisma";

export class CategoryRepository {
  static async findAll() {
    try {
      const categories = await prisma.category.findMany();
      return categories;
    } catch (error) {
      throw error;
    }
  }
}
