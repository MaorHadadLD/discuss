import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface CommentListProps {
  postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  if (comments.length === 0) {
    return <p className="text-gray-500">No comments yet. Be the first to comment!</p>;
  }

  const topLevelComments = comments.filter((comment) => comment.parentId === null);
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold">All {comments.length} Comments</h1>
      {topLevelComments.map((comment) => (
        <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
      ))}
    </div>
  );
}
