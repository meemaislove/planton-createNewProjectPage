import { useState, useEffect } from "react";

export default function SelectDateField({ handleChange }) {
  function generateArray(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  const currentMonths = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const currentYear = new Date().getFullYear();

  const months = generateArray(currentMonths, 12);
  const days = generateArray(currentDay, 31);
  const years = generateArray(currentYear, currentYear + 10);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSelectChange = (key, value) => {
    switch (key) {
      case 'month':
        setSelectedMonth(value);
        break;
      case 'day':
        setSelectedDay(value);
        break;
      case 'year':
        setSelectedYear(value);
        break;
      default:
        break;
    }
  };
  
  useEffect(() => {
    if (selectedMonth && selectedDay && selectedYear) {
      const dateString = `${selectedMonth}/${selectedDay}/${selectedYear}`;
      handleChange({
        target: {
          id: 'date',
          value: dateString,
        },
      });
    }
  }, [selectedMonth, selectedDay, selectedYear]);
  
  return (
    <div className="mb-4 flex">
      <label htmlFor="month" className="mr-14 block text-lg text-white mb-2">
        Date
      </label>
        <div className="grid grid-cols-3 gap-3">
          <select
            id="month"
            name="month"
            value={selectedMonth}
            onChange={(e) => handleSelectChange('month', e.target.value)}
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
            id="day"
            name="day"
            value={selectedDay}
            onChange={(e) => handleSelectChange('day', e.target.value)}
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
            id="year"
            name="year"
            value={selectedYear}
            onChange={(e) => handleSelectChange('year', e.target.value)}
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
  );
}
