import './UiCarouselStyle.css'
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
export function UiCarousel({ items, itemTemplate }: { items: any[], itemTemplate: any }) {
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    return (
        <Carousel value={items} numVisible={3} showIndicators={false} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate} />
    );
}