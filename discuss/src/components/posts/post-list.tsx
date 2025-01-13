import type { PostWithData } from '@/db/queries/post';
import Link from 'next/link';
import paths from '@/paths';

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}
export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }

    return (
      <div
        key={post.id}
        className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition-transform"
      >
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <p>By {post.user.name}</p>
            <p>{post._count.comments} comments</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="grid gap-4">{renderedPosts}</div>;
}
