"use client";

import { useTRPC } from "@/trpc/client";

import {  useSuspenseQuery } from "@tanstack/react-query";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { DataTable } from "@/components/data-table";
import { columns } from "../components/columns";

export const MeetingsView =() =>{
const trpc = useTRPC();
const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

return (
<div className="flex-1 pb-4 md:px-8 flex flex-col gap-y-4">
    <DataTable data={data.items} columns={columns}/>
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