import { Gender, ProductClothes, ProductStatus, Size } from "@/types/product.type";
import { slugtify } from "@/utils/formatter";

export const DATA_CLOTHES_MOCK: ProductClothes[] = [
  {
    id: "prod-001",
    name: "Los Angeles T-Shirt",
    slug: slugtify("Los Angeles T-Shirt"),
    description: "",
    shortDescription: "Men's Oversized Los Angeles Distressed Print T-Shirt",
    brand: "",
    categoryId: "1",
    gender: Gender.MEN,
    material: "Cotton",
    fit: "",
    price: 99,
    salePrice: 98,
    variants: [
      {
        color: {
          name: "Black",
          code: "#000000",
        },
        image: [
          {
            url: "https://img.ltwebstatic.com/images3_pi/2024/03/28/ea/17116030626317222aeca830cfd19dde3a24854d17_thumbnail_900x.webp",
            alt: "Los Angeles T-Shirt",
            isThumbnail: true,
          },
          {
            url: "https://img.ltwebstatic.com/images3_pi/2024/03/28/87/17116030593c09e6db635a594e07c2ee3815be0f43_thumbnail_220x293.webp",
            alt: "Los Angeles T-Shirt Back",
            isThumbnail: false,
          },
          {
            url: "https://img.ltwebstatic.com/images3_pi/2024/03/28/b8/1711603068a95aef7f5354a3c8abee8f30e1d94677_thumbnail_220x293.webp",
            alt: "Los Angeles T-Shirt Material",
          },
        ],
        size: [
          {
            size: Size.L,
            stock: 100,
            sku: "MHLBlack001",
            price: 99,
          },
          {
            size: Size.M,
            stock: 100,
            sku: "MHMBlack002",
            price: 99,
          },
          {
            size: Size.S,
            stock: 100,
            sku: "MHMSBlack003",
            price: 99,
          },
        ],
       
      },
    ],

    status: ProductStatus.ACTIVE,
    rating: 5,
    totalSold: 100,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod-002",
    name: "Manfinity EMRG T-Shirt",
    slug: slugtify("Manfinity EMRG T-Shirt"),
    description: "",
    shortDescription:
      "Manfinity EMRG Men Casual Letter Graphic Printed Round Neck Summer Short Sleeve T-Shirt.",
    brand: "",
    categoryId: "1",
    gender: Gender.MEN,
    material: "Cotton",
    fit: "",
    price: 99,
    salePrice: 98,
    variants: [
      {
        color: {
          name: "Black",
          code: "#000000",
        },
        image: [
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/b9/1755226200d71fa6b5260caf52e787f01ca27858d9_thumbnail_900x.webp",
            alt: "Manfinity EMRG T-Shirt",
            isThumbnail: true,
          },
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/0e/1755226198d463e8c78cf9595e148b3fe224a84d2f_thumbnail_220x293.webp",
            alt: "Manfinity EMRG T-Shirt Back",
            isThumbnail: false,
          },
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/1b/1755226203fdfd4ebbf6c976855d1641a2aa4e98dc_thumbnail_220x293.webp",
            alt: "Manfinity EMRG T-Shirt Material",
          },
        ],
        size: [
          {
            size: Size.L,
            stock: 100,
            sku: "MHLBlack004",
            price: 99,
          },
          {
            size: Size.M,
            stock: 100,
            sku: "MHMBlack005",
            price: 99,
          },
          {
            size: Size.S,
            stock: 100,
            sku: "MHSBlack006",
            price: 99,
          },
        ],
        
      },
      {
        color: {
          name: "Dark Grey",
          code: "#adb5bd",
        },
        image: [
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/93/1755226260697937d40585afb56834143ff0c9099c_thumbnail_220x293.webp",
            alt: "Manfinity EMRG T-Shirt Dark Gray",
            isThumbnail: true,
          },
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/91/175522625801824631001ad71015e0313d01bcab21_thumbnail_220x293.webp",
            alt: "Manfinity EMRG T-Shirt Dark Gray Back",
            isThumbnail: false,
          },
          {
            url: "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/aa/17552262652bcb05b6af0221ef5171a2d2ee178ff8_thumbnail_220x293.webp",
            alt: "Manfinity EMRG T-Shirt Dark Gray Material",
            isThumbnail: false,
          },
        ],
        size: [
          {
            size: Size.L,
            stock: 100,
            sku: "MHLGrey007",
            price: 99,
          },
          {
            size: Size.M,
            stock: 100,
            sku: "MHMGrey008",
            price: 99,
          },
          {
            size: Size.S,
            stock: 100,
            sku: "MHSBlack009",
            price: 99,
          },
        ],
        
      },
    ],

    status: ProductStatus.ACTIVE,
    rating: 5,
    totalSold: 100,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
