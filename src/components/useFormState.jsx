import { useState } from "react";

export const useFormState = () => {
  const [values, setValues] = useState({
    description: '',
    location: '',
    date: '',
    treesToPlant: 0,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return { values, handleChange };
};
