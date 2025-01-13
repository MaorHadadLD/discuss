import {Divider} from '@nextui-org/react';
import TopicCreateForm from '@/components/topics/topic-create-form';
import TopicList from '@/components/topics/topic-list';
import PostList from '@/components/posts/post-list';
import { fetchTopPosts } from '@/db/queries/post';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="col-span-1 p-4 bg-gray-50 shadow-lg rounded-lg">
        <TopicCreateForm />
        <Divider className="my-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
