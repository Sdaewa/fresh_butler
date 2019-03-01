import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import { initMapbox } from '../plugins/init_mapbox';

initMapbox();
import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();
