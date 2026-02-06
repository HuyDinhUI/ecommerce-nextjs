import { CategoryDTO } from "@/types/category.type";
import http from "@/utils/http";

interface ICategoryService {
    getAll(): Promise<{status: number, payload: {data: CategoryDTO[]}}>
}

class Category implements ICategoryService {
    getAll(): Promise<{ status: number; payload: { data: CategoryDTO[]; }; }> {
        return http.get<{data: CategoryDTO[]}>(`/category`)
    }
}

export const CategoryService = new Category()