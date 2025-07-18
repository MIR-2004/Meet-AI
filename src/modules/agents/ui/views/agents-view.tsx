"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
//import ErrorPage from "@/app/(dashboard)/agents/error";
import { ErrorState } from "@/components/error-state";
//import { ResponsiveDialog } from "@/components/responsive-dialog";
//import { Button } from "@/components/ui/button";

export const AgentsView = () => {
    const trpc =useTRPC();
    const { data } = useQuery(trpc.agents.getMany.queryOptions());

    return(
        <div>
            {JSON.stringify(data,null,2)}
        </div>
    );
};


export const AgentsViewLoading = () => {
    return(
        <LoadingState
            title="Loading Agents"
            description="This may take a fewseconds"
        />
    );
};


export const AgentsViewError = () => {
    return (
        <ErrorState 
          title="Error Loading Agents"
          description="Something went wrong"
        />
    )
}