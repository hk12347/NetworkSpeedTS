import { Point } from "./point";

export interface NetworkStation {
    point: Point;
    reach: number;
    speed: number;
}; 

export interface NetworkStations {
    result: string[]
}