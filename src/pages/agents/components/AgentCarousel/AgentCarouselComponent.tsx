import { useEffect, useState } from 'react';
import { UiCarousel } from '../../../../shared/ui/UiCarousel/UiCarouselComponent';
import { Agent } from '../../../../models/agent.interface';
import { getAgents } from '../../../../services/AgentService';
import { AgentCard } from '../../../../shared/AgentCard/AgentCardComponent';


export function AgentCarousel() {
    const [data, setData] = useState<Agent[]>([]);
    useEffect(() => {
        getAgents()
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
    }, []);
    const itemTemplate = (item: Agent) => {
        return (
            <AgentCard agent={item} />
        );
    };
    return (
        <div className="md:mt-12">
            <div>
                <UiCarousel items={data} itemTemplate={itemTemplate} />
            </div>
        </div>
    );
}

