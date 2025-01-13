import { notFound } from 'next/navigation';
import { db } from '@/db';

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
