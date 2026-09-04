"use client";

import { useState } from "react";
import Globe from "react-globe.gl";

interface LocationPoint {
  name: string;
  country: string;
  lat: number;
  lng: number;
  color: string;
}

const locations: LocationPoint[] = [
  { name: "Mae Chan", country: "Thailand", lat: 20.1467, lng: 99.8525, color: "#b9f6ff" },
  { name: "Chiang Mai", country: "Thailand", lat: 18.7883, lng: 98.9853, color: "#b9f6ff" },
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, color: "#9b7cff" },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, color: "#9b7cff" },
];

export default function WorldGlobe({ language = "en" }: { language?: "en" | "th" }) {
  const [selectedLocation, setSelectedLocation] = useState<LocationPoint>(locations[0]);
  const isThai = language === "th";

  return (
    <div className="space-glow relative min-h-[680px] overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#080414]/70">
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <Globe
          width={760}
          height={760}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
          atmosphereColor="#b9f6ff"
          atmosphereAltitude={0.16}
          pointsData={locations}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.08}
          pointRadius={0.45}
          pointsMerge={false}
          onPointClick={(point: object) => setSelectedLocation(point as LocationPoint)}
          pointLabel={(point: object) => {
            const location = point as LocationPoint;
            return `${location.name}, ${location.country}`;
          }}
          enablePointerInteraction
          animateIn
        />
      </div>
      <div className="relative z-10 flex min-h-[680px] items-end p-6 md:p-10">
        <div className="max-w-xl rounded-xl border border-white/10 bg-black/65 p-6 backdrop-blur-md md:p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] portfolio-accent">LIFE IN SPACE / 01</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{isThai ? "โลกใบเล็ก ไอเดียมากมาย" : "One small planet. Many ideas."}</h2>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-300">
            {isThai ? "ผมสร้างผลงานจากแม่จัน เชียงราย ด้วยความอยากรู้อยากเห็นที่มองไกลกว่าโลก" : "I build from Mae Chan, Chiang Rai, with curiosity pointed far beyond Earth."}
          </p>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Places connected to my work">
          {locations.map((location) => (
            <button
              key={location.name}
              type="button"
              onClick={() => setSelectedLocation(location)}
              aria-pressed={selectedLocation.name === location.name}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${selectedLocation.name === location.name ? "border-cyan-200 bg-cyan-100 text-slate-950" : "border-white/20 text-gray-300 hover:border-cyan-200/70 hover:text-cyan-100"}`}
            >
              {location.name}, {location.country}
            </button>
          ))}
          </div>
          <div className="mt-6 border-l-2 border-lime-300/60 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">{isThai ? "กำลังเชื่อมต่อกับ" : "Currently connected to"}</p>
            <p className="mt-1 text-lg font-semibold text-white">{selectedLocation.name}, {selectedLocation.country}</p>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute bottom-6 right-6 z-10 hidden text-xs uppercase tracking-widest text-gray-500 md:block">Drag to explore</span>
    </div>
  );
}
