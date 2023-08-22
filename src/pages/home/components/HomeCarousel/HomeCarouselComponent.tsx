import { Event } from "../../../../project/models/event.interface";
import { EventCard } from "../../../../shared/components/EventCard/EventCardComponent";
import { UiCarousel } from "../../../../shared/components/ui/UiCarousel/UiCarouselComponent";
import { useModelList } from "../../../../shared/hooks/valorant.api.hook";
import { pathnameEnum } from "../../../../project/interfaces/path.enum";

export function HomeCarousel() {
  const { data } = useModelList<Event>(pathnameEnum.events);
  const eventItemTemplate = (item: Event) => <EventCard event={item} />;
  return (
    <div className="md:mt-12">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white md:text-4xl">
        Ultimos Eventos
      </h2>
      <hr className="w-24 h-1 mx-auto  bg-red-600  border-0 rounded my-3" />
      <div>
        <UiCarousel items={data} itemTemplate={eventItemTemplate} />
      </div>
    </div>
  );
}
