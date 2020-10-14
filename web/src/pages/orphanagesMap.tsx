import React from 'react'

import '../styles/pages/orphanagesPage.css'
import '../styles/global.css'

import 'leaflet/dist/leaflet.css'

import { Link } from "react-router-dom"

import { FiPlus} from 'react-icons/fi'

import MapMarkerImg from "../img/map-marker.svg"

import { Map, TileLayer } from 'react-leaflet'


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarkerImg} alt="Marcador" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas Crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Lapa</strong>
                    <span>Parana</span>
                </footer>
            </aside>

            <Map  
                center={[-25.7694312,-49.7186106]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />

            </Link>

        </div>
    )

}

export default OrphanagesMap