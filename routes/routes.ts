/**
 * Required External Modules and Controllers
 */
import express, { Request, Response } from "express";
import NetworkSpeedController from "../controllers/networkspeed.controller"

/**
 * Router Definition
 */
export const stationsRouter = express.Router();

// Get NetworkStations
stationsRouter.get("/GetNetworkSpeed", async (req: Request, res: Response) => {
    try {

        const controller = new NetworkSpeedController();
        const response = await controller.getNetworkSpeed();

        return res.status(200).send(response);
    }
    catch (e) {
        const typedError = e as Error;
        res.status(500).send(typedError?.message);
    }
});