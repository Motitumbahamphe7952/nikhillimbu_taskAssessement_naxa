// src/components/NepalMap.tsx
import React, { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
  ScaleControl,
} from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// custom icon (public/images/…)
const defaultIcon = new L.Icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const NEPAL_CENTER: LatLngExpression = [28.3949, 84.1240];
const DEFAULT_ZOOM = 7;
const POINTS_OF_INTEREST: [number, number, string][] = [
  [27.7172, 85.3240, 'Kathmandu (Capital)'],
  [28.2096, 83.9856, 'Pokhara'],
  [27.6953, 85.3494, 'Bhaktapur'],
  [27.68,   85.32,   'Lalitpur (Patan)'],
  [27.7065, 83.3296, 'Chitwan National Park'],
  [27.962,  86.925,  'Mount Everest Base Camp'],
  [27.4828, 84.6164, 'Lumbini (Birthplace of Buddha)'],
];

function ResetCenterView({ center }: { center: LatLngExpression }) {
  const map = useMap();
  useEffect(() => { map.setView(center); }, [center, map]);
  return null;
}

const NepalMap: React.FC = () => (
  <MapContainer
    center={NEPAL_CENTER}
    zoom={DEFAULT_ZOOM}
    scrollWheelZoom
    zoomControl={false}
    className="w-full h-full"
  >
    <ZoomControl position="topright" />
    <ScaleControl position="bottomleft" />
    <ResetCenterView center={NEPAL_CENTER} />

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
    />

    {POINTS_OF_INTEREST.map(([lat, lng, label], idx) => (
      <Marker key={idx} position={[lat, lng]} icon={defaultIcon}>
        <Popup>{label}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default NepalMap;
