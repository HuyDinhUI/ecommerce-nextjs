import { prisma } from "@/utils/prisma";

export async function seedShippingMethod() {
    await prisma.shippingMethod.createMany({
        data: [
            {
                code: "#standard",
                name: "Standard",
                cityFee: 10,
                provinceFee: 15,
                estimateDaysMin: 3,
                estimateDaysMax: 4
            },
            {
                code: "#express",
                name: "Express",
                cityFee: 15,
                provinceFee: 20,
                estimateDaysMin: 2,
                estimateDaysMax: 3
            },
        ]
    })
}