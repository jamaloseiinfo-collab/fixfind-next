import Link from "next/link";
import { Provider } from "../data/providers";

export default function ProviderCard({ p }: { p: Provider }) {
  return (
    <Link href={`/providers/${p.id}`} className="block rounded-2xl overflow-hidden border bg-white shadow-card hover:shadow-lg transition">
      <img src={p.photos[0]} alt={p.name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{p.name}</h3>
          <span className="text-sm text-gray-600">⭐ {p.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{p.category} • {p.area}</p>
        <p className="text-sm text-gray-800 mt-2 font-medium">From R{p.basePrice}</p>
      </div>
    </Link>
  );
}
