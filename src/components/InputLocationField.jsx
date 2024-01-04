import { useState } from "react";

export default function InputLocationField({ handleChange }) {
  const [location, setLocation] = useState('');

  return (
    <div className="mb-4">
      <input
        type="text"
        id="location"
        className="mt-1 p-2 w-full h-8 border rounded-lg bg-[#1a1a1a]"
        placeholder="Location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          handleChange(e);
        }}
        required
      />
    </div>
  );
}
