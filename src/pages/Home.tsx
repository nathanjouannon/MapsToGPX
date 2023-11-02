// import { NavLink } from "react-router-dom";
import { useState , useRef, useEffect} from "react"
import "../styles/Home.css"
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import L from "leaflet"
import osm from "../Osm-provider"
import RoutingMachine from "../RoutingMachine"
import LocationIcon from '../assets/LocationIcons.png'
// import LeafletGeocoder from "../leafletGeocoder"

interface Position {
    lat: number,
    long: number
}

function Home() {
    const [position, setPosition] = useState<Position>({ lat : 45.733721, long:  5.984897 });
    const ZOOM_LEVEL = 13;
    const mapRef = useRef<any>(null);

    useEffect(() => {
        findLocation();
    }, [])

    const findLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({ lat: position.coords.latitude, long: position.coords.longitude });
            mapRef.current.setView([position.coords.latitude, position.coords.longitude], ZOOM_LEVEL);
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wayPoints: any[] = []
    const _createMarker = (e: any) => { 
        console.log(e.layer._latlng.lat, e.layer._latlng.lng)
        wayPoints.push(L.latLng(e.layer._latlng.lat, e.layer._latlng.lng))
        console.log(wayPoints)
    }

    return (
        <>
            <div className="home-container">
                <div className="map-container" id="map">
                    <MapContainer
                        center={[position.lat, position.long]}
                        zoom={ZOOM_LEVEL}
                        scrollWheelZoom={true}
                        ref={mapRef}
                    >
                        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

                        <Marker position={[position.lat, position.long]}>
                        </Marker>

                        <FeatureGroup>
                            <EditControl
                                position='topright'
                                draw={
                                    {
                                        rectangle: false,
                                        circle: false,
                                        circlemarker: false,
                                        marker: true,
                                        polyline: true,
                                        polygon: false
                                    }
                                }
                                onCreated={_createMarker}
                            />
                        </FeatureGroup>
                        {/* <LeafletGeocoder /> */}
                        <RoutingMachine />
                    </MapContainer>
                </div>
                <button onClick={() => {
                    findLocation();
                }
                }>Find me</button>
            </div>
        </>
    )
}

const defaultIcon = L.icon({
    iconUrl: LocationIcon,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});
L.Marker.prototype.options.icon = defaultIcon;


export default Home;