import { db } from "@/db";
import { agents } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
//import { TRPCError } from "@trpc/server";
//import { resolve } from "path";

export const agenysRouter = createTRPCRouter ({
    getMany: baseProcedure.query(async () => {
        const data = await db 
            .select()
            .from(agents);
    
        return data;    
    }),
});