import { NextResponse } from "next/server";

const PAYPAL_API = "https://sandbox.paypal.com";

export async function POST(req: Request) {
  const { orderId } = await req.json();

  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`
  ).toString("base64");

  // Lấy access token
  const tokenRes = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const { access_token } = await tokenRes.json();

  // Tạo order
  const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          custom_id: orderId,
          amount: {
            currency_code: "USD",
            value: 10,
          },
        },
      ],
    }),
  });

  const order = await orderRes.json();
  return NextResponse.json(order);
}
