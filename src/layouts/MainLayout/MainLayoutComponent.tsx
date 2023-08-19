import { UiNavbar } from "../../shared/ui/UiNavbar/UiNavBarComponent";

export function MainLayout({ children }: any){
    return (
        <>
        <UiNavbar/>
        <main>{children}</main>
        </>
    );
}