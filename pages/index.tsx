import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryChips from "../components/CategoryChips";
import ProviderCard from "../components/ProviderCard";
import { PROVIDERS } from "../data/providers";

export default function Home() {
  return (
    <>
      <Head>
        <title>FixFind — Find trusted local fixers fast</title>
        <meta name="description" content="Premium marketplace for local fixers across Johannesburg & Pretoria." />
      </Head>
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div
          className="h-[440px] w-full"
          style={{
            background: "linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.35)), url('/hero.jpg') center/cover no-repeat"
          }}
        />
        <div className="container">
          <div className="-mt-40 text-white max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 border border-white/40 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" /> Face verification enabled
            </span>
            <h1 className="text-5xl font-extrabold mt-3 leading-tight">
              Find trusted local fixers — <span className="text-brand">fast.</span>
            </h1>
            <p className="mt-3 opacity-90">
              Plumbers, electricians, cleaners, mechanics & more across Johannesburg & Pretoria. Verified pros. Safer payments.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 bg-white rounded-2xl shadow-card p-2 flex flex-col sm:flex-row gap-2 max-w-3xl"
            >
              <input className="flex-1 rounded-xl border p-3" placeholder="Search e.g., plumber, electrician..." />
              <select className="rounded-xl border p-3">
                <option>Area</option>
                <option>Soweto</option><option>Randburg</option><option>Parktown</option>
                <option>Marshalltown</option><option>Lenasia</option><option>Pretoria CBD</option>
              </select>
              <select className="rounded-xl border p-3">
                <option>Category</option>
                <option>Home & Maintenance</option><option>Cleaning & Lifestyle</option>
                <option>Tech & Digital</option><option>Automotive</option>
                <option>Personal & Family Care</option><option>Business & Property</option>
              </select>
              <button className="rounded-xl bg-brand text-white px-5 font-semibold">Search</button>
            </form>
          </div>
        </div>
      </section>

      <main className="container py-10">
        <h2 className="text-2xl font-semibold mb-4">Browse by category</h2>
        <CategoryChips />

        <h3 className="text-xl font-semibold mt-10 mb-3">Top providers</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </main>

      <Footer />
    </>
  );
}
