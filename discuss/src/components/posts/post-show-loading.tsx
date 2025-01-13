import { Skeleton } from '@nextui-org/react';

export default function PostShowLoading() {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <Skeleton className="h-8 w-48 mb-4" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-full" />
    </div>
  );
}
