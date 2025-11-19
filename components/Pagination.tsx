import Link from 'next/link'

export default function Pagination({ page, pages }: { page: number, pages: number }) {
  const maxButtons = 3;
  let start = Math.max(1, page - 1);
  let end = Math.min(pages, start + maxButtons - 1);
  if (end - start + 1 < maxButtons) {
    start = Math.max(1, end - maxButtons + 1);
  }

  const pagesArray = [];
  for (let i = start; i <= end; i++) pagesArray.push(i);

  return (
    <div className="flex items-center justify-center gap-2 mt-auto mt-10">
      <Link href={`/?page=${Math.max(1, page-1)}`} className={`px-3 py-1 border rounded ${page===1 ? 'opacity-50 pointer-events-none' : ''}`}>Prev</Link>

      {pagesArray.map(p => (
        <Link key={p} href={`/?page=${p}`} className={`px-3 py-1 border rounded ${p===page ? 'bg-pink-600 text-white' : ''}`}>{p}</Link>
      ))}

      <Link href={`/?page=${Math.min(pages, page+1)}`} className={`px-3 py-1 border rounded ${page===pages ? 'opacity-50 pointer-events-none' : ''}`}>Next</Link>
    </div>
  )
}
