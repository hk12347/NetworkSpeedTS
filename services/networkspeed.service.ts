/**
 * Required External Interfaces
 */
import { NetworkStation } from "../interfaces/networkstation";
import { Point } from "../interfaces/point";

export const getBestNetworkStation = (pt: Point) => {
    // Predefined stations
    let stations: NetworkStation[] = [
        {
            point: { x: 0, y: 0 },
            reach: 9,
            speed: 0
        },
        {
            point: { x: 20, y: 20 },
            reach: 6,
            speed: 0
        },
        {
            point: { x: 10, y: 0 },
            reach: 12,
            speed: 0
        },
        {
            point: { x: 5, y: 5 },
            reach: 13,
            speed: 0
        },
        {
            point: { x: 99, y: 25 },
            reach: 2,
            speed: 0
        }
    ];

    let bestStation: NetworkStation = { point: {x: 0, y: 0}, reach:0, speed : 0 };

    for (var i = 0, len = stations.length; i < len; i++) {

        let speed = getSpeed(
            getDistanceBetween(stations[i].point, pt),
            stations[i].reach);

        if (speed > bestStation.speed) {
            bestStation = stations[i];
            bestStation.speed = speed;
        }
    }
    return bestStation;
}

/**
 * Calculate the distance between two-dimensional coordinates
 * @param array point [x,y]
 * @param array point [x,y]
 * @returns {number}
 */
export function getDistanceBetween(from: Point, to: Point) {
    return Math.sqrt(
            Math.pow(Math.abs(from.x - to.x), 2)
          + Math.pow(Math.abs(from.y - to.y), 2)
    );
}

/**
 * Calculate the power of link station to given distance
 * @param distance to the link tower
 * @param reach of the link tower
 * @returns {number}
 */
export function getSpeed(distance: number, reach: number) {
    return (distance > reach)
        ? 0
        : Math.pow((reach - distance), 2);
}