import { useFormState } from "./useFormState";
import SelectDateField from "./SelectDateField";
import TextAreaDescriptionField from "./TextAreaDescriptionField";
import InputLocationField from "./InputLocationField";
import InputTreesField from "./InputTreesField";
import SubmitButtonField from "./SubmitButtonField";

export default function Form() {
  const { values, handleChange } = useFormState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', values);
  };

  return (
    <div className="text-white w-[665px] h-[500px] mx-auto my-auto p-14 bg-[#1a1a1a] rounded-xl shadow-md ">
      <form onSubmit={handleSubmit}>
        <TextAreaDescriptionField handleChange={handleChange} />
        <InputLocationField handleChange={handleChange} />
        <SelectDateField handleChange={handleChange} />
        <InputTreesField handleChange={handleChange} />
        <SubmitButtonField />
      </form>
    </div>
  );
}
