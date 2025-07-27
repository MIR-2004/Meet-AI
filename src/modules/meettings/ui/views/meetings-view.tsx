"use client";

import { useTRPC } from "@/trpc/client";

import {  useSuspenseQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const MeetingsView =() =>{

const trpc = useTRPC();

const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

return (

<div className="overflow-x-scroll">

   

</div>

);
};



export const MeetingsViewLoading = () => {
    return(
        <LoadingState
            title="Loading Agents"
            description="This may take a fewseconds"
        />
    );
};


export const MeetingsViewError = () => {
    return (
        <ErrorState 
          title="Error Loading Agents"
          description="Something went wrong"
        />
    );
};