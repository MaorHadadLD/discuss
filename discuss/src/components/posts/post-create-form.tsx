'use client';

import { useActionState } from 'react';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '@/components/common/form-button';

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useActionState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action} className="p-6 bg-white shadow-xl rounded-lg">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800">Create a Post</h3>

            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
              name="title"
              label="Post Title"
              labelPlacement="outside"
              placeholder="Enter your title here"
              isClearable
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
              name="content"
              label="Post Content"
              labelPlacement="outside"
              placeholder="Write your post content here"
              isClearable
            />

            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form.join(', ')}
              </div>
            ) : null}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
