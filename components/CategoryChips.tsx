const CATS = [
  "Home & Maintenance",
  "Cleaning & Lifestyle",
  "Tech & Digital",
  "Automotive",
  "Personal & Family Care",
  "Business & Property",
];
export default function CategoryChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {CATS.map((c) => (
        <a key={c} href={`/providers?category=${encodeURIComponent(c)}`}
           className="inline-flex items-center gap-2 px-4 py-2 border rounded-2xl bg-white shadow-sm hover:border-brand">
          {c}
        </a>
      ))}
    </div>
  );
}
