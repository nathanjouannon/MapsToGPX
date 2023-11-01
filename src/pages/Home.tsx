// import { NavLink } from "react-router-dom";
import { useState , useRef, useEffect} from "react"
import "../styles/Home.css"
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import osm from '../Osm-provider'
import L, { map } from 'leaflet'
import 'leaflet-routing-machine';
// import LeafletGeocoder from "../leafletGeocoder"

interface Position {
    lat: number,
    long: number
}

function Home() {
    const [position, setPosition] = useState<Position>({ lat : 45.733721, long:  5.984897 });
    const ZOOM_LEVEL = 13;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    const _createMarker = (e: any) => { console.log(e)}

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
                          <Popup>
                            Vous êtes ici !
                          </Popup>
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

                        {L.Routing.control({
                            waypoints: [
                              L.latLng(45.6947, 5.8915), // Point de départ
                              L.latLng(45.7056, 5.8964), // Point d'arrivée
                            ]}).addTo(mapRef.current.leafletElement)
                        }
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


export default Home;