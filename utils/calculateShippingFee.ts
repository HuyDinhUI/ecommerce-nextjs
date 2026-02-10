import { ShippingMethodDTO } from "@/types/shippingMethod.type";

export default function calculateShippingFee(
  method: ShippingMethodDTO,
  codeAddress: number,
) {
  const typeAddress = codeAddress > 16 ? "provinceFee" : "cityFee";

  const fee = method[typeAddress];

  return fee;
}
