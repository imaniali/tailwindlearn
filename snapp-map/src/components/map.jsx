import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// تعریف آیکون فروشگاه (با رنگ فیروزه‌ای مشابه تصویر)
const storeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/372/372906.png', // یک آیکون فروشگاه نمونه
  iconSize: [38, 38], // سایز آیکون
  iconAnchor: [19, 38], // نوک آیکون کجا باشد
});
// تعریف آیکون موقعیت کاربر
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png', // یک آیکون لوکیشن نمونه
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});


function Map() {
  // مختصات فروشگاه (مبدأ)
  const storePos = [35.7625, 51.4100]; 
  // مختصات کاربر (مقصد)
  const userPos = [35.7550, 51.4120];  

  // آرایه‌ای از نقاط برای کشیدن خط بین آن‌ها
  const route = [storePos, userPos];

  return (
    <div className="w-full h-full relative z-0"> 
      <MapContainer 
        center={[35.753, 51.4110]} // مرکز نقشه بین دو نقطه
        zoom={15} 
        scrollWheelZoom={true} 
        className="w-full h-full"
        zoomControl={false} // دکمه‌های زوم را برای شلوغ نشدن صفحه برمی‌داریم
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" // استفاده از نقشه روشن‌تر مشابه اسنپ
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* مارکر فروشگاه */}
        <Marker position={storePos} icon={storeIcon} />

        {/* مارکر کاربر */}
        <Marker position={userPos} icon={userIcon} />

        {/* خط مسیر بین دو نقطه */}
        <Polyline 
          positions={route} 
          color="#ff4f00" // رنگ سبز/فیروزه‌ای
          dashArray="10, 10" // تبدیل خط به خط‌چین
          weight={3} // ضخامت خط
        />
        
      </MapContainer>
    </div>
  );
}

export default Map;