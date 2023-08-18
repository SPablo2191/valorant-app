import './HomeTitleStyle.css'
export function HomeTitle() {
    return (
        <>
            <h1 className="text-slate-800 main-title text-7xl dark:text-white"><span className='text-red-600'>V</span>alorant</h1>
            <h2 className="text-slate-800 main-title text-4xl dark:text-white">One <span className='text-red-600'>More</span></h2>
        </>
    );
}