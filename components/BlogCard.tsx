import Link from 'next/link'

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/posts/${post.id}`} className="block h-full">
      <article className="flex bg-[#EBF4FF] border rounded-lg overflow-hidden hover:shadow-md h-full">
        <img src={post.photo_url} alt={post.title} className="w-40 h-40 object-cover flex-shrink-0" />
        <div className="p-4 flex-1">
          <div className="text-sm text-gray-500">{post.category}</div>
          <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
          <p className="mt-2 text-gray-700 text-sm line-clamp-3">{post.description}</p>
        </div>
      </article>
    </Link>
  )
}
