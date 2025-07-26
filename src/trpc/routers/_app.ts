

import { agentsRouter } from '@/modules/agents/server/procedures';

import {  createTRPCRouter } from '../init';
import { agents } from '@/db/schema';
import { meetingssRouter } from '@/modules/meettings/server/procedures';

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingssRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;