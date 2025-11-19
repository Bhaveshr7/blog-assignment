import Link from 'next/link';

export const revalidate = 0;

async function getPost(id: string) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const data = await getPost(params.id);

  if (!data || !data.blog) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <p>Post not found.</p>
        <p><Link href="/">Back</Link></p>
      </div>
    );
  }

  const post = data.blog;

  return (
    <div className="max-w-2xl mx-auto px-4">
      <p className="mt-4">
        <Link href="/" className="text-xl hover:text-pink-600">
          ← Back to listing
        </Link>
      </p>

      <article className="mt-6 bg-[#EBF4FF] p-6 rounded-lg shadow">
        <img
          src={post.photo_url}
          alt={post.title}
          className="w-full h-64 object-cover rounded"
        />

        <div className="mt-4 text-gray-500">{post.category}</div>

        <h1 className="mt-1 text-2xl font-bold">{post.title}</h1>

        <p className="mt-2 text-sm text-gray-600">
          Created: {post.created_at}{" "}
          {post.updated_at ? `• Updated: ${post.updated_at}` : ""}
        </p>

        <div className="mt-4 prose prose-sm max-w-none">
          <p>{post.content_text || post.description}</p>
        </div>
      </article>
    </div>
  );
}
