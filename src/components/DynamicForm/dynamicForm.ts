import { useForm } from "react-hook-form";
import { TFormData } from "./types";

export const defaultValue = {
  name: '',
};

export const useDynamicForm = () => {
    return useForm<TFormData>(
        {
          defaultValues: {
            items: [defaultValue]
          },
          mode: "onChange"
        }
      );
}