import { agents } from "./agents.js";
import { routeRequest as routeRequestWithAgents } from "./engine/route-request.js";
export { routes } from "./engine/routes.js";
import type { FinalResult } from "./types.js";

export function routeRequest(input: string): FinalResult {
  return routeRequestWithAgents(input, agents);
}
