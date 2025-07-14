import { z } from 'zod';

import { agenysRouter } from '@/modules/agents/server/procedures';

import {  createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  agents: agenysRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;