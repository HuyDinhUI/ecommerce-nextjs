import { prisma } from "@/utils/prisma";

export async function seedUser () {
    await prisma.user.createMany({
        data: [
            {
                email: "dinhvanhuy@gmail.com",
                password: "$2a$10$VA5w7bqDm.DZ5ZSH8NvCXuVf0NfR3/PPVB0MWxLIH3eKusiwEUczC"
            }
        ]
    })
}