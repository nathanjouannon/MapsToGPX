/* eslint-disable @typescript-eslint/no-explicit-any */
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (wayPoints: any[]) => {

    // const transformWaypointsFormat = (waypoints: any[] ) => {
    //     const newWaypoints: any[] = [];
    //     waypoints.map((waypoint) => {
    //       newWaypoints.push(L.latLng(waypoint.lat, waypoint.lng));
    //     });
    //     return newWaypoints;
    // };

    // console.log(wayPoints)
    wayPoints.map((wayPoints) => {
        console.log(wayPoints.lat, wayPoints.lng)
    })
    // console.log(transformWaypointsFormat(wayPoints))

  const instance = L.Routing.control({
    // waypoints: [
    //     Leaflet.latLng(33.52001088075479, 36.26829385757446),
    //     Leaflet.latLng(33.50546582848033, 36.29547681726967)
    // ],
    // waypoints: transformWaypointsFormat(wayPoints),
    lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
      addWaypoints: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;