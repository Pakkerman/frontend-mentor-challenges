import { EditIcon } from "../svgs";

export default function EditButton({}: {}) {
  return (
    <button className="group flex items-center gap-2 px-2 font-bold text-primary-moderate-blue hover:text-primary-light-grayish-blue">
      <EditIcon />
      Edit
    </button>
  );
}
