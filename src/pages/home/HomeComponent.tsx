import { HomeCarousel } from "./components/HomeCarousel/HomeCarouselComponent";
import { HomeHeader } from "./components/HomeHeader/HomeHeaderComponent";

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeCarousel />
    </>
  );
}
