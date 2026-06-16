import { useState } from "react";

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const useFormWithValidation = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validateAll = () => {
    const newErrors = {};
    const hasField = (field) => values[field] !== undefined;
    const isEmptyField = (field) => hasField(field) && !values[field].trim();

    if (hasField("username")) {
      if (isEmptyField("username")) {
        newErrors.username = "Username is required";
      }
    }

    if (hasField("email")) {
      if (isEmptyField("email")) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(values.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (hasField("password")) {
      if (isEmptyField("password")) {
        newErrors.password = "Password is required";
      } else if (values.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }

    setErrors(newErrors);
    const valid = Object.keys(newErrors).length === 0;
    setIsValid(valid);
    return valid;
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    resetForm,
    validateAll,
  };
};
