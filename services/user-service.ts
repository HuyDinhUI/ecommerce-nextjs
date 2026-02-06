import { RegisterFormValue } from "@/schemas/auth.schema";
import http from "@/utils/http";

interface IUserService {
    register(data: RegisterFormValue): Promise<{status: number, payload: any}>

}

class User implements IUserService {
    register(data: RegisterFormValue): Promise<{ status: number; payload: any; }> {
        return http.post<any>("/user/register", data)
    }
}

export const UserService = new User()