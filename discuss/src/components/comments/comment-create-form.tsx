"use client";

import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useActionState(
    actions.createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();
      if (!startOpen) setOpen(false);
    }
  }, [formState, startOpen]);

  return (
    <div>
      <Button
        size="sm"
        variant="light"
        color="primary"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Cancel' : 'Reply'}
      </Button>
      {open && (
        <form action={action} ref={ref} className="mt-4 p-4 bg-gray-50 rounded shadow">
          <Textarea
            name="content"
            label="Your Comment"
            placeholder="Write your comment here..."
            isInvalid={!!formState.errors.content}
            errorMessage={formState.errors.content?.join(", ")}
            className="mb-4"
          />
          {formState.errors._form && (
            <div className="p-2 bg-red-100 text-red-700 rounded">
              {formState.errors._form.join(", ")}
            </div>
          )}
          <FormButton>Create Comment</FormButton>
        </form>
      )}
    </div>
  );
}

