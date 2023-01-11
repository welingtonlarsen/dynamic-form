import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFormData } from "./types";

export const defaultValue = {
  name: '',
};

const schema: yup.SchemaOf<TFormData> = yup.object({
    items: yup.array().of(
      yup.object({
        name: yup.string().required('Item name is required'),
        type: yup.number().required(),
        amount: yup.number().required()
      })
    )
})

export const useDynamicForm = () => {
    return useForm<TFormData>(
        {
          defaultValues: {
            items: [defaultValue]
          },
          mode: "onChange",
          resolver: yupResolver(schema)
        }
      );
}