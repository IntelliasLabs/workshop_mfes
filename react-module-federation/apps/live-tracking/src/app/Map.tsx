import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { AccidentEvent, eventsBus } from 'lib';

export default function Map() {

  useEffect(() => {
    setTimeout(() => {
      eventsBus.dispatchEvent(new AccidentEvent('Accident happened!', 'Accident on route 98 MK!', 'live-tracking'));
    }, 3000);
  }, []);

  return (
    <MapContainer
      style={{ width: '100%', height: 550 }}
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{ lat: 51.505, lng: -0.09 }}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
