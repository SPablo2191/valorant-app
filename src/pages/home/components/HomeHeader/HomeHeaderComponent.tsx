import { HomeTitle } from "../HomeTitle/HomeTitleComponent";
import { UiInputText } from "../../../../shared/ui/UiInputText/UiInputTextComponent";
export function HomeHeader(){
    return (
        <>
        <HomeTitle/>
        <UiInputText placeholder="Ingrese Nombre de Jugador"/>
        </>
    );
}