/* eslint-disable @typescript-eslint/no-explicit-any */
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (wayPoints: any[]) => {

    const instance = L.Routing.control({
      waypoints: wayPoints,
      lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }],
          extendToWaypoints: true,
          missingRouteTolerance: 10
        },
        addWaypoints: true,
    }); 
    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;