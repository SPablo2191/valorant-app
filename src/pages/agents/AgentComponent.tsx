import { MainTitle } from "../../shared/components/MainTitle/mainTitleComponent";
import { AgentCarousel } from "./components/AgentCarousel/AgentCarouselComponent";

export function AgentPage() {
  return (
    <>
      <MainTitle title="Agentes"/>
      <AgentCarousel />
    </>
  );
}
