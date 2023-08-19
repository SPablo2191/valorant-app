import { Event } from "../../models/event.interface";
import './EventCardStyle.css';

export function EventCard({ event }: { event: Event }) {
    return (
        <div className="bg-zinc-50 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5  mx-4 hover:bg-red-600 grow-on-hover my-8 shadow-2xl">
            <div>
                <span className="text-white font-bold inline-flex items-center justify-center p-2 bg-red-500 rounded-md shadow-lg">
                    <h2 >{event.shortDisplayName}</h2>
                </span>
            </div>
            <h3 className="text-slate-900 dark:text-white  mt-5 text-2xl tracking-tight">{event.displayName}</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">

            </p>
        </div>
    );
}