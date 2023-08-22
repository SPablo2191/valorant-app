import { pathnameEnum } from "../project/interfaces/path.enum";
import { DataEvent } from "../project/models/event.interface";
const apiUrl : string = import.meta.env['VITE_API_URL']+pathnameEnum.events;

export async function getEvents(): Promise<DataEvent> {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data: DataEvent = await response.json();
        return data;
    } catch (error : any) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}