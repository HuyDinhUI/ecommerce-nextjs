import { CategoryRepository } from "./category-repository";

export class CategoryService {
  static async getAll() {
    try {
      const data = await CategoryRepository.findAll();
      return {
        status: 200,
        message: "Categories fetched successfully",
        payload: data
      };
    } catch (error) {
      throw error;
    }
  }
}
