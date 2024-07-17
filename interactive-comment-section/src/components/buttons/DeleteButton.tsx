import { DeleteIcon } from "~/svgs";

export default function DeleteButton({}: {}) {
  return (
    <button className="group flex items-center gap-2 px-2 font-bold text-primary-soft-red hover:text-primary-pale-red">
      <DeleteIcon />
      Delete
    </button>
  );
}
