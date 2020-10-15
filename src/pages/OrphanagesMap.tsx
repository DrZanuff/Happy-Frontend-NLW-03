import React, {useEffect} from 'react';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanage-map.css'

import { FiPlus , FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom'

import { Map , TileLayer , Marker , Popup } from 'react-leaflet'


import mapIcon from '../utils/mapIcons';
import api from '../services/api';


function OrphanagesMap(){
    useEffect( () => {
        api.get("orphanages").then( response =>{
            console.log(response)
        })
    } , [] )

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                        Muitas crianças estão esperando a sua visita :)
                    </p>
                </header>

                <footer>
                    <strong>Distrito Federal</strong>
                    <span>Brásilia</span>
                </footer>
            </aside>

            <Map
                center={[-15.8080326,-47.7629105]} 
                zoom={10}
                style={ { width: '100%' , height: '100%' } }
                
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                position={[-15.8080326,-47.7629105]}
                icon={mapIcon}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das menina
                        <Link to="/orphanages/1">
                            <FiArrowRight size={32} color="#FFF" />
                        </Link>
                    </Popup>

                </Marker>

            </Map>

            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default OrphanagesMap;