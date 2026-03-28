import { createMockFeed } from "@/lib/mockData/mockApi";
import { Series } from "@/lib/utils/types";

// Single entry-point for data access. Swap this with REST/WebSocket when backend arrives.
export const getRaceFeed = (series: Series) => createMockFeed(series);
