import { drivers } from "@/lib/data/drivers";
import { teams } from "@/lib/data/teams";
import { cars } from "@/lib/data/cars";
import { articles } from "@/lib/data/news";
import { createMockFeed } from "@/lib/mockData/mockApi";
import { Article, Car, DriverProfile, Series, Team } from "@/lib/utils/types";

// Single entry-point for data access. Swap this with REST/WebSocket when backend arrives.
export const getRaceFeed = (series: Series) => createMockFeed(series);

export const listDrivers = (): DriverProfile[] => drivers;
export const getDriverById = (id: string): DriverProfile | undefined => drivers.find((d) => d.id === id);

export const listTeams = (): Team[] => teams;
export const getTeamById = (id: string): Team | undefined => teams.find((t) => t.id === id);

export const listCars = (): Car[] => cars;
export const getCarById = (id: string): Car | undefined => cars.find((c) => c.id === id);

export const listArticles = (): Article[] => articles;
export const getArticleBySlug = (slug: string): Article | undefined => articles.find((a) => a.slug === slug);
