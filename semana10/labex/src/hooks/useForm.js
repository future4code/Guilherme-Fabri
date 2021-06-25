import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    const fieldName = event.target.name;
    //pega todas as propriedades do form, seta ela com o novo valor
    setForm({ ...form, [fieldName]: newValue });
  };
  return [form, onChangeInput]
}