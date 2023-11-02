/* eslint-disable @typescript-eslint/no-explicit-any */
import L, { ControlOptions } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props: ControlOptions) => {

    const instance = L.Routing.control({
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ],
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