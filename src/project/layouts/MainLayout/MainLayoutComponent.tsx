import { Outlet } from "react-router-dom"
import { UiNavbar } from "../../../shared/components/ui/UiNavbar/UiNavBarComponent";
import { UiFooter } from "../../../shared/components/ui/UiFooter/UiFooterComponent";
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