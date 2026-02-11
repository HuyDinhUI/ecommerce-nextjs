import { OrderStatus, Prisma } from "@prisma/client";
import { OrderRepository } from "./order-repository";

export class OrderService {
  static async getAll(
    userId: string,
    status?: string,
    sort?: string,
    page?: number,
    limit?: number,
    skip?: number,
  ) {
    if (!userId) {
      throw new Error("UNAUTHORIZED");
    }

    const where: Prisma.OrderWhereInput = {
      userId,
      ...(status && { status: status as OrderStatus }),
    };

    return OrderRepository.findByUserId(sort, page, limit, skip, where);
  }
}
