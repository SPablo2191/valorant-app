import { Agent } from "../../../../project/models/agent.interface";
import { AgentCard } from "../../../../shared/components/AgentCard/AgentCardComponent";
import { UiCarousel } from "../../../../shared/components/ui/UiCarousel/UiCarouselComponent";
import { useModelList } from "../../../../shared/hooks/valorant.api.hook";
import { pathnameEnum } from "../../../../project/interfaces/path.enum";

export function AgentCarousel() {
  const { data } = useModelList(
    pathnameEnum.agents,
    "?isPlayableCharacter=true"
  );
  const itemTemplate = (item: Agent) => <AgentCard agent={item} />;
  return (
    <div className="mb-4">
      <div>
        <UiCarousel items={data} itemTemplate={itemTemplate} />
      </div>
    </div>
  );
}
