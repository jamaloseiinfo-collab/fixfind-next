import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Body: { amountZar: number, email: string, metadata?: any }
 * Returns: Paystack initialize response (authorization_url, access_code, reference)
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { amountZar, email, metadata } = req.body || {};
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) return res.status(500).json({ error: "Missing PAYSTACK_SECRET_KEY" });

    const body = {
      amount: Math.round(Number(amountZar) * 100), // kobo
      email,
      currency: "ZAR",
      metadata,
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/providers`
    };

    const r = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await r.json();
    res.status(r.ok ? 200 : 400).json(data.data || data);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
