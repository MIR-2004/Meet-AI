"use client" ;


import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { AgentIdViewHeader } from "../components/agent-id-view-header";

interface Props {
    agentId: string;
};

export const AgentIdview = ({ agentId }: Props) => {
    const trpc = useTRPC();

    const { data } = useSuspenseQuery(trpc.agents.getOne.queryOptions({id: agentId}));

    return (
        <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
            <AgentIdViewHeader
                agentId={agentId}
                agentName={data.name}
                onEdit={() => {}}
                onRemove={() => {}}
            
            />
        </div>
    );
};

export const AgentIdViewLoading = () => {
    return(
        <LoadingState
            title="Loading Agent"
            description="This may take a fewseconds"
        />
    );
};


export const AgentIdViewError = () => {
    return (
        <ErrorState
          title="Error Loading Agent"
          description="Something went wrong"
        />
    )
}