/**
 * Required External Modules and Interfaces
 */
import * as NetworkSpeedService from "../services/networkspeed.service";
import { Point } from "../interfaces/point";

interface Response {
    result: string[];
}

/** 
* Print out the most suitable network station and the network speed from devices [x,y]
*/
export default class NetworkSpeedController {
    public async getNetworkSpeed(): Promise<Response> {

        let devices: Point[] = [
            { x: 0, y: 0 },
            { x: 100, y: 100 },
            { x: 15, y: 10 },
            { x: 18, y: 18 },
            { x: 13, y: 13 },
            { x: 25, y: 99 }
        ];

        const stations: any[] = [];

        for (var i = 0, len = devices.length; i < len; i++) {
            let station = NetworkSpeedService.getBestNetworkStation(devices[i]);

            stations.push((station.speed > 0) ?
                'Best network station for point ' + devices[i].x + "," + devices[i].y + " is "
                + station.point.x + "," + station.point.y + " with speed " + station.speed.toFixed(2)
                : "No link station within reach for point " + devices[i].x + "," + devices[i].y);
        }
        return { result: stations };
    }
}