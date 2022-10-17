import { YMaps, Map } from '@pbe/react-yandex-maps';

const Maps = () => (
  <YMaps>
    <div>
      йййййййй!
      <Map defaultState={{ center: [55.145468, 61.372631], zoom: 17 }} />
    </div>
  </YMaps>
);
export default Maps;

