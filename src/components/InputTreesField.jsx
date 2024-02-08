import { useState } from "react";

export default function InputTreesField({ handleChange }) {
    const [treesToPlant, setTreesToPlant] = useState('');

    const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === '' || /^[1-9]\d*$/.test(inputValue)) {
      const parsedValue = parseInt(inputValue, 10);
      setTreesToPlant(parsedValue);
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