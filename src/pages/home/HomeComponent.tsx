import { MainLayout } from "../../layouts/MainLayout/MainLayoutComponent";
import { HomeCarousel } from "./components/HomeCarousel/HomeCarouselComponent";
import { HomeHeader } from "./components/HomeHeader/HomeHeaderComponent";

export function HomePage() {
    return (<>
        <MainLayout>
            <HomeHeader />
            <HomeCarousel />
        </MainLayout>
    </>);
}