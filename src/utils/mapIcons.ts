import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize : [32,48],
    iconAnchor: [16,48],
    popupAnchor: [0 , -60]
  })

  export default mapIcon;