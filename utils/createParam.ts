import { Params } from "@/types/params.type";

export const CreateParams = (params: Params) => {
    const query = new URLSearchParams(params as any);
    return query.toString()
} 