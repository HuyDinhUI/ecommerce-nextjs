
export const CreateParams = (params: any) => {
    const query = new URLSearchParams(params);
    return query.toString()
} 