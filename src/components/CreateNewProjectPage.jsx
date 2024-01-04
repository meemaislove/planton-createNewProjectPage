import { disconnect } from 'mongoose';
import React, { useState } from 'react';

const CreateNewProjectPage = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [treesToPlant, setTreesToPlant] = useState(0);

  const currentYear = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleChangeMonth = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleChangeDay = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleChangeYear = (e) => {
    setSelectedYear(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      description,
      location,
      date: `${selectedMonth}/${selectedDay}/${selectedYear}`,
      treesToPlant,
    });
  };

  return (
    <div className="text-white w-[665px] h-[500px] mx-auto my-auto p-14 bg-[#1a1a1a] rounded-xl shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            type="text"
            id="description"
            className="mt-1 p-2 w-full h-28 border rounded-lg bg-[#1a1a1a]"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="location"
            className="mt-1 p-2 w-full h-8 border rounded-lg bg-[#1a1a1a]"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex">
        <label htmlFor="calendar" className="mr-14 block text-lg text-white mb-2">
        Date
      </label>
      <div className="grid grid-cols-3 gap-3">
        <select
          value={selectedMonth || ''}
          onChange={handleChangeMonth}
          className="text-center w-13 h-8 border rounded-lg bg-[#1a1a1a]"
        >
          <option value="" disabled>
            MM
          </option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={selectedDay || ''}
          onChange={handleChangeDay}
          className="text-center w-13 h-8 border rounded-lg bg-[#1a1a1a]"
        >
          <option value="" disabled>
            DD
          </option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          value={selectedYear || ''}
          onChange={handleChangeYear}
          className="text-center w-18 h-8 border rounded-lg bg-[#1a1a1a]"
        >
          <option value="" disabled>
            YYYY
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
        </div>

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
            onChange={(e) => setTreesToPlant(e.target.value)}
            required
          />
        </div>

        <div className="mt-20 mb-4 flex justify-center">
          <button
            type="submit"
            className="bg-white text-[24px] text-black py-1 px-7 rounded-full hover:bg-[#1a1a1a] border hover:text-white hover:border hover:border-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProjectPage;
