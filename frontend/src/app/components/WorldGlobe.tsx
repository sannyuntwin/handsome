"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";

const bangkok = { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 };

export default function WorldGlobe({ language = "en" }: { language?: "en" | "th" }) {
  const globeRef = useRef<GlobeMethods>();
  const [globeSize, setGlobeSize] = useState(760);
  const isThai = language === "th";

  useEffect(() => {
    const resizeGlobe = () => setGlobeSize(Math.min(760, Math.max(420, window.innerWidth * 1.15)));
    resizeGlobe();
    window.addEventListener("resize", resizeGlobe);
    return () => window.removeEventListener("resize", resizeGlobe);
  }, []);

  useEffect(() => {
    const controls = globeRef.current?.controls();
    if (!controls) return;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    return () => {
      controls.autoRotate = false;
    };
  }, []);

  return (
    <div className="globe-section space-glow relative min-h-[680px] overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#080414]/70">
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <Globe
          ref={globeRef}
          width={globeSize}
          height={globeSize}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
          atmosphereColor="#b9f6ff"
          atmosphereAltitude={0.16}
          ringsData={[bangkok]}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => ["#b9f6ff", "#9b7cff"]}
          ringMaxRadius={3.2}
          ringPropagationSpeed={1.8}
          ringRepeatPeriod={1400}
          enablePointerInteraction
          animateIn
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-cyan-100/15 bg-[#03030a]/72 px-6 py-6 backdrop-blur-md md:px-10 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] portfolio-accent">LIFE IN SPACE / 01</p>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">{isThai ? "โลกใบเล็ก ไอเดียมากมาย" : "One small planet. Many ideas."}</h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-300">
            {isThai ? "ผมสร้างผลงานจากกรุงเทพฯ ประเทศไทย ด้วยความอยากรู้อยากเห็นที่มองไกลกว่าโลก" : "I build from Bangkok, Thailand, with curiosity pointed far beyond Earth."}
            </p>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute bottom-6 right-6 z-10 hidden text-xs uppercase tracking-widest text-gray-500 md:block">Drag to explore</span>
    </div>
  );
}
