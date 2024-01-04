import { useState } from "react";

export default function TextAreaDescriptionField({ handleChange }) {
  const [description, setDescription] = useState('');

  return (
    <div className="mb-4">
      <textarea
        type="text"
        id="description"
        className="mt-1 p-2 w-full h-28 border rounded-lg bg-[#1a1a1a]"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          handleChange(e);
        }}
        required
      />
    </div>
  );
}
