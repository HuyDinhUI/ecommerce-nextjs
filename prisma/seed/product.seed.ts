import { Gender } from "@/types/product.type";
import { slugtify } from "@/utils/formatter";
import { prisma } from "@/utils/prisma";

export async function productSeed() {
  await prisma.product.createMany({
    data: [
      {
        name: "Los Angeles T-Shirt",
        slug: slugtify("Los Angeles T-Shirt"),
        description: "",
        shortDescription:
          "Men's Oversized Los Angeles Distressed Print T-Shirt",
        brand: "",
        categoryId: "cml9629xg0000vxm6sj94c754",
        gender: Gender.MEN,
        material: "Cotton",
        fit: "",
        price: 89,
        salePrice: null,
      },
      {
        name: "Manfinity EMRG T-Shirt",
        slug: slugtify("Manfinity EMRG T-Shirt"),
        description: "",
        shortDescription:
          "Manfinity EMRG Men Casual Letter Graphic Printed Round Neck Summer Short Sleeve T-Shirt.",
        brand: "",
        categoryId: "cml9629xg0000vxm6sj94c754",
        gender: Gender.MEN,
        material: "Cotton",
        fit: "",
        price: 99,
        salePrice: null,
      },
      {
        name: "Shoulder Sleeve T-Shirt With Wing",
        slug: slugtify("Shoulder Sleeve T-Shirt With Wing"),
        description: "",
        shortDescription:
          "Hemo, Hemo, Men's Casual Distressed Washed Round Neck Dropped Shoulder Sleeve T-Shirt With Wing Print, Summer",
        brand: "",
        categoryId: "cml9629xg0000vxm6sj94c754",
        gender: Gender.MEN,
        material: "Cotton",
        fit: "",
        price: 59,
        salePrice: null,
      },
      {
        name: "ROMWE MEN Casual Men's Round Neck Short",
        slug: slugtify("ROMWE MEN Casual Men's Round Neck Short"),
        description: "",
        shortDescription:
          "ROMWE MEN Casual Men's Round Neck Short",
        brand: "ROMWE",
        categoryId: "cml9629xg0000vxm6sj94c754",
        gender: Gender.MEN,
        material: "Cotton",
        fit: "",
        price: 89,
        salePrice: null,
      },
      {
        name: "Attitoon Vintage Style Retro Car",
        slug: slugtify("Attitoon Vintage Style Retro Car"),
        description: "",
        shortDescription:
          "Attitoon Vintage Style Retro Car Letter Print Round Neck Short Sleeve Fitted Women T-Shirt, Suitable For Summer Spring",
        brand: "Attitoon",
        categoryId: "cml9629xg0000vxm6sj94c754",
        gender: Gender.WOMEN,
        material: "Cotton",
        fit: "",
        price: 79,
        salePrice: null,
      },
      {
        name: "Wide-Leg Casual Jeans Pants",
        slug: slugtify("Wide-Leg Casual Jeans Pants"),
        description: "",
        shortDescription:
          "1pc Men's Fashionable Loose Retro Vintage Washed Wide-Leg Casual Jeans Pants (No Belt Or Accessories)",
        brand: "",
        categoryId: "cml9629xh0003vxm6ei3jp1j4",
        gender: Gender.UNISEX,
        material: "Jean",
        fit: "",
        price: 69,
        salePrice: null,
      },
      {
        name: "Men's Striped Polo Shirt With Collar",
        slug: slugtify("Men's Striped Polo Shirt With Collar"),
        description: "",
        shortDescription:
          "Men's Autumn Clothing: Men's Striped Polo Shirt With Collar, Striped Long Sleeve Shirt, Retro Style Men's Shirt, Men's Versatile Loose T-Shirt, Knit Polo Shirt, Shirt",
        brand: "",
        categoryId: "cml9629xh0002vxm6uo6kvaj2",
        gender: Gender.MEN,
        material: "Polyester",
        fit: "",
        price: 79,
        salePrice: null,
      },
      {
        name: "AXEPEAK Men's Long Sleeve",
        slug: slugtify("AXEPEAK Men's Long Sleeve"),
        description: "",
        shortDescription:
          "AXEPEAK Men's Long Sleeve Frayed Edge Single-Breasted Casual Loose Distressed Denim Jacket",
        brand: "AXEPEAK",
        categoryId: "cml9629xh0004vxm6w9wz7gcb",
        gender: Gender.MEN,
        material: "Jean",
        fit: "",
        price: 99,
        salePrice: null,
      },
    ],
  });
}
