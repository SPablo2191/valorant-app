import { useEffect, useState } from 'react';
import { getAgents } from '../../../../services/AgentService';
import { Agent } from '../../../../project/models/agent.interface';
import { AgentCard } from '../../../../shared/components/AgentCard/AgentCardComponent';
import { UiCarousel } from '../../../../shared/components/ui/UiCarousel/UiCarouselComponent';


export function AgentCarousel() {
    const [data, setData] = useState<Agent[]>([]);
    useEffect(() => {
        getAgents()
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
    }, []);
    const itemTemplate = (item: Agent) => ((
        <AgentCard agent={item} />
    ));
    return (
        <div className="mb-4">
            <div>
                <UiCarousel items={data} itemTemplate={itemTemplate} />
            </div>
        </div>
    );
}

