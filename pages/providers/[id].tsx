import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROVIDERS } from "../../data/providers";
import { useState } from "react";

export default function ProviderDetail() {
  const { query } = useRouter();
  const provider = PROVIDERS.find(p => p.id === query.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!provider) return null;

  async function handleBook() {
    const res = await fetch("/api/paystack/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountZar: provider.basePrice,
        email: email || "test@example.com",
        metadata: { providerId: provider.id, customerName: name }
      })
    });
    const data = await res.json();
    if (data?.authorization_url) {
      window.location.href = data.authorization_url;
    } else {
      alert("Could not start checkout");
    }
  }

  return (
    <>
      <Head><title>{provider.name} — FixFind</title></Head>
      <Navbar />
      <main className="container py-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={provider.photos[0]} className="w-full h-72 object-cover rounded-2xl" />
            <h1 className="text-3xl font-bold mt-4">{provider.name}</h1>
            <p className="text-gray-600 mt-1">{provider.category} • {provider.area}</p>
            <p className="mt-4">{provider.bio}</p>
          </div>

          <aside className="border rounded-2xl p-5 h-fit">
            <div className="text-2xl font-bold">From R{provider.basePrice}</div>
            <div className="text-sm text-gray-600">⭐ {provider.rating.toFixed(1)} rating</div>

            <div className="mt-4 space-y-3">
              <input className="w-full border rounded-xl p-3" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
              <input className="w-full border rounded-xl p-3" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
              <button onClick={handleBook} className="w-full rounded-xl bg-brand text-white py-3 font-semibold">Book now</button>
            </div>
            <p className="text-xs text-gray-500 mt-3">You’ll be redirected to Paystack (test mode).</p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
