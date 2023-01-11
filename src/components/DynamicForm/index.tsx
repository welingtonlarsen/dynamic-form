import { useFieldArray } from "react-hook-form";
import { defaultValue, useDynamicForm } from "./dynamicForm";
import { Price } from "./Price";

const DynamicForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useDynamicForm()
    const { fields, append, remove } = useFieldArray({
      control,
      name: 'items'
    })
  
    return (
      <>
        <h1>Dynamic Form</h1>

        <form onSubmit={handleSubmit(console.log)}>

          {fields.map(({ id, name, type, amount }, index) => {                      
            return (
              <div key={id}>
                <input {...register(`items.${index}.name`)} name={`items.${index}.name`} placeholder="Item name"/>
                {errors.items?.[index]?.name?.message}

                <select {...register(`items.${index}.type`)} name={`items[${index}].type`}>
                  <option value={0}>Items</option>
                  <option value={10}>Item A</option>
                  <option value={20}>Item B</option>
                </select>
                
                <input {...register(`items.${index}.amount`)} name={`items.${index}.amount`} type='number' placeholder='Quantity'></input>
                
                <Price control={control} index={index} />
                
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            )
          })}
    
          <button type="button" onClick={() => append(defaultValue)}>Append</button>
          
          <input type='submit'/>
        
        </form>
      </>
      
    );
  }
  
  export default DynamicForm;