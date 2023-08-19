import { UiFooter } from "../../shared/ui/UiFooter/UiFooterComponent";
import { UiNavbar } from "../../shared/ui/UiNavbar/UiNavBarComponent";
import { Outlet } from "react-router-dom"
export function MainLayout() {
    return (
        <>
            <UiNavbar />
            <div className="mt-2">
                <Outlet />
            </div>
            <UiFooter />
        </>
    );
}