import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';

export  function  HomeCarousel(){
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
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
        <div className="md:mt-12">
        <h2 className="text-2xl md:text-4xl text-white">Ultimos Eventos</h2>
        <hr  className="w-24 h-1 mx-auto  bg-red-600  border-0 rounded my-3"/>
        </div>
    );
}