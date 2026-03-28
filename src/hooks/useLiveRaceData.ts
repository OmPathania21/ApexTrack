"use client";

import { useEffect, useMemo, useState } from "react";
import { RaceUpdate } from "@/lib/mockData/mockApi";
import { getRaceFeed } from "@/lib/api";
import { Series } from "@/lib/utils/types";

export const useLiveRaceData = (series: Series) => {
  const feed = useMemo(() => getRaceFeed(series), [series]);
  const [update, setUpdate] = useState<RaceUpdate>(feed.getSnapshot());

  useEffect(() => {
    const unsubscribe = feed.subscribe(setUpdate);
    feed.start();
    return () => {
      unsubscribe();
      feed.stop();
    };
  }, [feed]);

  return update;
};
