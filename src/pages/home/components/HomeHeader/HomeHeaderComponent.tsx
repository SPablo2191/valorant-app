import { UiInputText } from "../../../../shared/components/ui/UiInputText/UiInputTextComponent";
import { HomeTitle } from "../HomeTitle/HomeTitleComponent";
export function HomeHeader(){
    return (
        <>
        <HomeTitle/>
        <UiInputText placeholder="Ingrese Nombre de Jugador"/>
        </>
    );
}