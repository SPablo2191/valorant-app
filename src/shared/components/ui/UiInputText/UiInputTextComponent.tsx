import { useState } from "react";
import { InputText } from "primereact/inputtext";

export function UiInputText({ placeholder, iconName }: { placeholder: string ,iconName : string}) {
  const [value, setValue] = useState("");
  return (
    <div className="my-4">
      <span className="p-input-icon-left ">
        <i className={iconName} />
        <InputText
          placeholder={placeholder}
          className="text-white bg-red-500 w-full border-none dark:bg-slate-600   md:w-96"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </span>
    </div>
  );
}
