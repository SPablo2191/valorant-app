import { useState } from "react";
import { InputText } from 'primereact/inputtext';
        
export function UiInputText(){
    const [value, setValue] = useState('');
    return (
        <div>
         <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
    
}