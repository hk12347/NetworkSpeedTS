/**
 * Unit tests
 */ 

/**
 * Required External Modules and Interfaces
 */
import * as NetworkSpeedService from "../services/networkspeed.service";
import { Point } from "../interfaces/point"
import { NetworkStation } from "../interfaces/networkstation";

/**
 * Test parameters for distance, reach and points
 */
let distance: number = 100;
let reach: number = 20;

let points: Point[] = [
    { x: 0, y: 0 },
    { x: 3, y: 4 },
    { x: 150, y: 99 }
];

/** 
 * Test getDistanceBetween() method get distance in numeric between 2 points [x,y]
 * */ 
test('Should return distance', () => {
    let result: number = NetworkSpeedService.getDistanceBetween(points[0], points[1]);

    expect(result).toBe(5);
});

/**
 *  Test getBestNetworkStation() method when predefined network station is in reach
 */
test('Should return networkstation available', () => {
    let result: NetworkStation = NetworkSpeedService.getBestNetworkStation(points[1]);

    expect(result.speed).toBeGreaterThan(0);
});

/** 
 * Test getBestNetworkStation() method when no predefined network station is in reach
*/
test('Should return networkstation NOT available', () => {
    let result: NetworkStation = NetworkSpeedService.getBestNetworkStation(points[2]);

    expect(result.speed).toBe(0);
});

/**
 * Test getSpeed() method when device is not in reach of station (distance < reach)
 */
test('Should return networkstation speed in reach', () => {
    let result: number = NetworkSpeedService.getSpeed(distance - 90, reach);

    expect(result).toBeGreaterThan(0);
});

/**
 * Test getSpeed() method when device is not in reach of station (distance > reach)
 */
test('Should return networkstation speed NOT in reach', () => {
    let result: number = NetworkSpeedService.getSpeed(distance, reach);

    expect(result).toBe(0);
});