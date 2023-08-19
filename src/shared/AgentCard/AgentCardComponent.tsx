import { Agent } from "../../models/agent.interface";


export function AgentCard({ agent }: { agent: Agent }) {
    return (
        <div className="bg-zinc-50 dark:bg-slate-900 rounded-lg px-6 py-6 ring-1 ring-slate-900/5  mx-4 hover:bg-red-600 grow-on-hover my-6 shadow-2xl" >
            <img src={agent.fullPortrait ? agent.fullPortrait : ''} alt="" />
            <div className="mt-3">
                <span className="text-white font-bold inline-flex items-center justify-center p-2 bg-red-500 rounded-md shadow-lg">
                    <h2>{agent.displayName}</h2>
                </span>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {agent.role?.displayName}
            </p>
            </div>
        </div>
    );
}