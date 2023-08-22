import { useEffect, useState } from 'react';
import { getEvents } from '../../../../services/EventService';
import { Event } from '../../../../project/models/event.interface';
import { EventCard } from '../../../../shared/components/EventCard/EventCardComponent';
import { UiCarousel } from '../../../../shared/components/ui/UiCarousel/UiCarouselComponent';

export function HomeCarousel() {
    const [data, setData] = useState<Event[]>([]);
    useEffect(() => {
        getEvents()
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
    }, []);
    const eventItemTemplate = (item: Event) => {
        return (
            <EventCard event={item} />
        );
    };
    return (
        <div className="md:mt-12">
            <h2 className="text-2xl md:text-4xl text-white">Ultimos Eventos</h2>
            <hr className="w-24 h-1 mx-auto  bg-red-600  border-0 rounded my-3" />
            <div>
                <UiCarousel items={data} itemTemplate={eventItemTemplate} />
            </div>
        </div>
    );
}

