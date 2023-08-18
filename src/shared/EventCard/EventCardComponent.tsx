import { Event } from "../../models/event.interface";

export function EventCard({event} : {event : Event}) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <h2>{event.shortDisplayName}</h2>
                </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {event.displayName}
            </p>
        </div>
    );
}