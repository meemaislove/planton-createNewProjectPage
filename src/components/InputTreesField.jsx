import { useState } from "react";

export default function InputTreesField({ handleChange }) {
    const [treesToPlant, setTreesToPlant] = useState(0);

    const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Check if the entered value is a non-negative integer
    if (/^\d*$/.test(inputValue) && inputValue >= 0) {
      setTreesToPlant(inputValue, 10);
      handleChange(e);
    }
  };

    return (
        <div className="mb-4 flex">
          <label htmlFor="treesToPlant" className="mr-12 block text-lg text-white">
            Trees
          </label>
          <input
            type="number"
            id="treesToPlant"
            className="text-center p-2 w-2/12 h-8 border rounded-lg bg-[#1a1a1a]"
            placeholder="0"
            value={treesToPlant}
            onChange={handleInputChange}
            required
          />
        </div>
    )
}