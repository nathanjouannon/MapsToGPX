// import { useEffect} from "react";
// import L from "leaflet";
// import { useMap } from "react-leaflet";

// function LeafletGeocoder() {
//     const map = useMap();
//     useEffect(() => {
//         L.Control.geocoder({
//             defaultMarkGeocode: false,
//         })
//             .on("markgeocode", function (e: any) {
//                 const bbox = e.geocode.bbox;
//                 const poly = L.polygon([
//                     bbox.getSouthEast(),
//                     bbox.getNorthEast(),
//                     bbox.getNorthWest(),
//                     bbox.getSouthWest(),
//                 ]).addTo(map);
//                 map.fitBounds(poly.getBounds());
//             })
//         .addTo(map)
//     }, []);
//     return null;
// }

// export default LeafletGeocoder;