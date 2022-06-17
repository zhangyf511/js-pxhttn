// Import stylesheets
import './style.css';
import { Map, TileLayer } from 'leaflet';

// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const map = new Map('map');
const layer = new TileLayer(
  'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
  {
    subdomains: '1234',
  }
);
const amaplayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d',
  {}
);
layer.addTo(amaplayer);
map.setView([39, 117], 10);
