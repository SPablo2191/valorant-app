import { Button } from "primereact/button";
import { MainTitle } from "../../../../shared/components/MainTitle/mainTitleComponent";
import { UiInputText } from "../../../../shared/components/ui/UiInputText/UiInputTextComponent";
import { Link as Anchor } from "react-router-dom";
export function LoginCard() {
  return (
    <div className="bg-slate-900 rounded-1 m-4 p-3">
      <MainTitle title="Iniciar Sesión" />
      <div className="grid grid-rows-3 grid-flow-col gap-0">
        <UiInputText
          placeholder="Ingrese correo electronico"
          iconName="pi pi-envelope"
        />
        <UiInputText placeholder="Ingrese contraseña" iconName="pi pi-lock" />
        <div>
          <Button label="Iniciar Sesión" className="bg-red-500 border-0 hover:bg-red-600" />
          <p className="my-3 dark:text-white">
            ¿No esta registrado?{" "}
            <span className="text-red-500"><Anchor to={'/register'}>Registrese ahora</Anchor></span>
          </p>
        </div>
      </div>
    </div>
  );
}
