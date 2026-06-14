import { useState } from "react";

export const useFormWithValidation = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return {
    values,
    setValues,
    handleChange,
  };
};
