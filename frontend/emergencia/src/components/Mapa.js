import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default class Maps extends Component {
  render() {
    const apiKey = "AIzaSyD0-NXj_4PCe3F22tEmCGIod0D585Jgec8";

    function getRandomLat() {
      const minLat = 25.6866;
      const maxLat = 25.7594;
      const randomLat = Math.random() * (maxLat - minLat) + minLat;
      return randomLat;
    }
    function getRandomLong() {
      const minLng = -100.3659;
      const maxLng = -100.3153;
      const randomLng = Math.random() * (maxLng - minLng) + minLng;
      return randomLng;
    }

    let latitud = getRandomLat();
    let longitud = getRandomLong();

    return (
      <div className="container">
        <div style={{ height: "150px", width: "300px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={{
              lat: latitud,
              lng: longitud,
            }}
            defaultZoom={14.2}
          >
            {/* Marcador Rojo */}
            <div
              lat={latitud}
              lng={longitud}
            >
              <LocationOnIcon
                style={{
                  color: "red",
                  fontSize: 30,
                }}
              />
            </div>

            {/* Marcador Azul */}
            {/* <div
              lat={25.715021689621285}
              lng={-100.30185805524592}
            >
              <LocationOnIcon
                style={{
                  color: "blue",
                  fontSize: 30,
                }}
              />
            </div> */}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
