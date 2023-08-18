import  { useEffect, useState } from 'react';
import { UiCarousel } from '../../../../shared/ui/UiCarousel/UiCarouselComponent';
import { EventCard } from '../../../../shared/EventCard/EventCardComponent';
import { pathnameEnum } from '../../../../project/interfaces/path.enum';
import { DataEvent, Event } from '../../../../models/event.interface';
const apiUrl : string = import.meta.env['VITE_API_URL']+pathnameEnum.events;
export function HomeCarousel() {
    const [data, setData] = useState<Event[]>([]);
    console.log(apiUrl);
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then((data : DataEvent) => {
                console.log(data);
                setData(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const eventItemTemplate = (item : Event) =>{
        return (
            <EventCard event={item}/>
        );
    };
    return (
        <div className="md:mt-12">
            <h2 className="text-2xl md:text-4xl text-white">Ultimos Eventos</h2>
            <hr className="w-24 h-1 mx-auto  bg-red-600  border-0 rounded my-3" />
            <UiCarousel items={data} itemTemplate={eventItemTemplate} />
        </div>
    );
}

