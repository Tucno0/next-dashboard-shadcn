import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface UserProps {
  user: { name: string; id: string };
}

export const User = ({ user }: UserProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-gray-500 p-4 my-2 rounded-md shadow-md"
    >
      <h1 className="text-lg font-bold">{user.name}</h1>
    </div>
  );
};
