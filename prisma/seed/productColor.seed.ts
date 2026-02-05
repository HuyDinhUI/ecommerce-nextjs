import { prisma } from "@/utils/prisma";

export async function productColorSeed() {
    await prisma.productColor.createMany({
        data: [
            {
                colorName: "Black",
                colorCode: "#000000",
                productId: "cml9ggcq10000fhm6u0wol3t7"
            },
            {
                colorName: "Black",
                colorCode: "#000000",
                productId: "cml9ggcq20001fhm6s7xt6nox"
            },
            {
                colorName: "Dark Grey",
                colorCode: "#bfbfbf",
                productId: "cml9ggcq20001fhm6s7xt6nox"
            },
            {
                colorName: "Black",
                colorCode: "#000000",
                productId: "cml9ggcq20002fhm6sbjc2rjf"
            },
            {
                colorName: "Light Blue",
                colorCode: "#33ccff",
                productId: "cml9ggcq20003fhm64oakvw2m"
            },
            {
                colorName: "Light Grey",
                colorCode: "#d9d9d9",
                productId: "cml9ggcq20003fhm64oakvw2m"
            },
            {
                colorName: "Navy",
                colorCode: "#ffffe6",
                productId: "cml9ggcq20003fhm64oakvw2m"
            },
            {
                colorName: "Purple",
                colorCode: "#b366ff",
                productId: "cml9ggcq20003fhm64oakvw2m"
            },
            {
                colorName: "Dark Green",
                colorCode: "#267326",
                productId: "cml9ggcq20003fhm64oakvw2m"
            },
            {
                colorName: "White",
                colorCode: "#ffffff",
                productId: "cml9ggcq20004fhm6pyt5gu21"
            },
            {
                colorName: "Dark Grey",
                colorCode: "#bfbfbf",
                productId: "cml9ggcq20004fhm6pyt5gu21"
            },
            {
                colorName: "Black",
                colorCode: "#000000",
                productId: "cml9ggcq20004fhm6pyt5gu21"
            },
            {
                colorName: "Black",
                colorCode: "#000000",
                productId: "cml9ggcq20005fhm6fwv563hu"
            },
            {
                colorName: "Dark Grey",
                colorCode: "#bfbfbf",
                productId: "cml9ggcq20005fhm6fwv563hu"
            },
            {
                colorName: "Brown",
                colorCode: "#86592d",
                productId: "cml9ggcq20006fhm67xhta5mn"
            },
            {
                colorName: "Dark Blue",
                colorCode: "#00004d",
                productId: "cml9ggcq20006fhm67xhta5mn"
            },
            {
                colorName: "Dark Grey",
                colorCode: "#bfbfbf",
                productId: "cml9ggcq20007fhm6xywztnrs"
            },
        ]
    })
}