import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';

export default function TopicCreateForm() {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={actions.createTopic}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Topic</h3>
                    </div>
                    <Input 
                        name="name" 
                        label="Name" 
                        labelPlacement="outside" 
                        placeholder="Name"
                     />
                    <Textarea
                        name="description"
                        label="Description"
                        labelPlacement="outside"
                        placeholder="Describe your topic"
                    />
                    <Button type="submit" color="primary">Create</Button>
                </form>
            </PopoverContent>
        </Popover>
    )
}