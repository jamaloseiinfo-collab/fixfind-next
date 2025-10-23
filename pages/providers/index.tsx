import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProviderCard from "../../components/ProviderCard";
import { PROVIDERS } from "../../data/providers";

export default function ProvidersList() {
  return (
    <>
      <Head><title>Explore providers — FixFind</title></Head>
      <Navbar />
      <main className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Explore providers</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
