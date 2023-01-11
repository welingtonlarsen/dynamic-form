import { Control, useWatch } from "react-hook-form";
import { TFormData } from "./types";

type TPriceProps = {
    control: Control<TFormData, any>,
    index: number
  }

export const Price: React.FC<TPriceProps> = ({control, index}) => {
    const value = useWatch({
        control,
        defaultValue: {}
    });

    return <span>{(value.items?.at(index)?.type || 0) * (value.items?.at(index)?.amount || 0)}</span>
}