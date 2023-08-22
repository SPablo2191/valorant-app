import { pathnameEnum } from "../project/interfaces/path.enum";
import { DataAgent } from "../project/models/agent.interface";
const apiUrl : string = import.meta.env['VITE_API_URL']+pathnameEnum.agents+`?isPlayableCharacter=${true}`;

export async function getAgents(): Promise<DataAgent> {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data: DataAgent = await response.json();
        return data;
    } catch (error : any) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}