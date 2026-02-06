import "dotenv/config";

import { seedCategory } from "./category.seed";
import { productSeed } from "./product.seed";
import { productColorSeed } from "./productColor.seed";
import { productImageSeed } from "./productImage.seed";
import { seedProductSize } from "./productSize.seed";
import { seedUser } from "./user.seed";

async function main() {
  await seedUser();
}

main()
  .then(() => {
    console.log("🌱 Seed completed");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
