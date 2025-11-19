import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'

export const revalidate = 0;

export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page || '1');
  const perPage = 6;
  const limit = 40;
  const offset = 0;

  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=${limit}&offset=${offset}`, { cache: 'no-store' });
  const json = await res.json();
  let posts: any[] = [];

  if (Array.isArray(json)) {
    posts = json;
  } else if (json.blogs) {
    posts = json.blogs;
  } else if (json.data) {
    posts = json.data;
  } else {
    posts = json;
  }

  const pages = Math.max(1, Math.ceil(posts.length / perPage));
  const start = (page - 1) * perPage;
  const pageItems = posts.slice(start, start + perPage);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[70vh] pb-20 md:pb-16">
      <section className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((post: any) => (
          <div key={post.id} className="h-full">
            <BlogCard post={post} />
          </div>
        ))}
      </section>

      <Pagination page={page} pages={pages} />
    </div>
  )
}
