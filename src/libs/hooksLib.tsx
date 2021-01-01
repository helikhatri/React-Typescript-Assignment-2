import { useState } from "react";

export function useFormFields(initialState:any) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event: any,isClear: number) {
      debugger;
      if (isClear === 1) {
        setValues('');
      }
      else {
        setValues({
          ...fields,
          [event.target.id]: event.target.value
        });
      }
    }
  ];
}
