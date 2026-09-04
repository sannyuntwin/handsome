"use client";

import { useEffect, useRef, useState } from "react";
import { Orbit, Sparkles } from "lucide-react";
import type { Simulation } from "spacekit.js";

export default function SpacekitScene({ language = "en", background = false }: { language?: "en" | "th"; background?: boolean }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<Simulation | null>(null);
  const [sceneState, setSceneState] = useState<"loading" | "ready" | "error">("loading");
  const [speed, setSpeed] = useState(8);
  const [date, setDate] = useState("2032-11-04");
  const isThai = language === "th";

  useEffect(() => {
    let cancelled = false;
    let simulation: Simulation | undefined;
    const sceneElement = sceneRef.current;

    const createScene = async () => {
      if (!sceneElement) return;

      try {
        const Spacekit = await import("spacekit.js");
        if (cancelled) return;

        simulation = new Spacekit.Simulation(sceneElement as unknown as HTMLCanvasElement, {
          basePath: "https://typpo.github.io/spacekit/src",
          jdPerSecond: 8,
          camera: {
            initialPosition: [0, -12, 6],
            enableDrift: true,
          },
          debug: {
            showAxes: false,
            showGrid: false,
            showStats: false,
          },
        });
        simulation.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
        simulation.createAmbientLight(0x666666);
        simulation.createLight([5, -5, 8], 0xffffff);
        simulation.createStars({ minSize: 0.7 });

        simulationRef.current = simulation;
        const sun = simulation.createObject("sun", Spacekit.SpaceObjectPresets.SUN);
        simulation.createObject("earth", {
          ephem: Spacekit.EphemPresets.EARTH,
          radius: 0.13,
        });
        simulation.createObject("mars", {
          ephem: Spacekit.EphemPresets.MARS,
          radius: 0.1,
        });
        simulation.createObject("jupiter", {
          ephem: Spacekit.EphemPresets.JUPITER,
          radius: 0.26,
        });
        simulation.createObject("saturn", {
          ephem: Spacekit.EphemPresets.SATURN,
          radius: 0.22,
        });
        await simulation.zoomToFit(sun, 5);

        if (!cancelled) setSceneState("ready");
      } catch {
        if (!cancelled) setSceneState("error");
      }
    };

    void createScene();
    return () => {
      cancelled = true;
      simulation?.stop();
      simulationRef.current = null;
      sceneElement?.replaceChildren();
    };
  }, []);

  const changeSpeed = (nextSpeed: number) => {
    setSpeed(nextSpeed);
    simulationRef.current?.setJdPerSecond(nextSpeed);
  };

  const changeDate = (nextDate: string) => {
    setDate(nextDate);
    simulationRef.current?.setDate(new Date(`${nextDate}T00:00:00Z`));
  };

  return (
    <div className={background ? "spacekit-background" : "spacekit-panel overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#080414]/80"}>
      <div className={background ? "spacekit-background-canvas" : "grid gap-0 lg:grid-cols-[0.7fr_1.3fr]"}>
        {!background && <div className="flex flex-col justify-between border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] portfolio-accent">
              <Orbit size={16} /> {isThai ? "Spacekit.js / ระบบสุริยะ" : "Spacekit.js / Solar system"}
            </p>
            <h2 className="max-w-sm text-3xl font-bold tracking-tight text-white md:text-5xl">
              {isThai ? "มองออกไปไกลกว่าโลก" : "Look beyond the familiar."}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-gray-400">
              {isThai
                ? "สำรวจระบบสุริยะแบบอินเทอร์แอคทีฟที่ขับเคลื่อนด้วยข้อมูลวงโคจรจริง"
                : "Explore an interactive solar system powered by real orbital data. Drag to orbit, scroll to travel, and follow the motion of the planets."}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
            <Sparkles size={15} className="text-cyan-200" />
            {sceneState === "ready"
              ? isThai ? "ระบบพร้อมสำรวจ" : "System ready to explore"
              : sceneState === "error"
                ? isThai ? "ไม่สามารถโหลดระบบได้" : "System unavailable"
                : isThai ? "กำลังโหลดระบบ" : "Loading system"}
          </div>
        </div>}
        <div className={background ? "relative h-full w-full" : "relative min-h-[420px] bg-[#03030a] md:min-h-[560px]"}>
          <div ref={sceneRef} className="absolute inset-0" aria-label="Interactive solar system visualization" />
          {!background && <div className="spacekit-controls absolute right-3 top-3 z-10 w-[min(16rem,calc(100%-1.5rem))] border border-white/10 bg-[#141414]/90 p-3 text-xs text-gray-300 backdrop-blur-md md:right-5 md:top-5">
            <label className="flex items-center justify-between gap-3">
              <span>{isThai ? "วันที่" : "Date"}</span>
              <input
                type="date"
                value={date}
                onChange={(event) => changeDate(event.target.value)}
                className="min-w-0 border border-white/10 bg-[#242424] px-2 py-1 text-emerald-300 outline-none"
              />
            </label>
            <label className="mt-3 flex items-center gap-3">
              <span className="w-12 shrink-0">{isThai ? "ความเร็ว" : "Speed"}</span>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={speed}
                onChange={(event) => changeSpeed(Number(event.target.value))}
                className="min-w-0 flex-1 accent-cyan-300"
              />
              <output className="w-8 text-right text-cyan-300">{speed}</output>
            </label>
            <label className="mt-3 flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-cyan-300" />
              {isThai ? "แสดงวงโคจร" : "Show orbits"}
            </label>
            <label className="mt-2 flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-cyan-300" />
              {isThai ? "แสดงทางช้างเผือก" : "Show Milky Way"}
            </label>
          </div>}
          {!background && sceneState === "loading" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.25em] text-gray-500">
              {isThai ? "กำลังเตรียมวงโคจร" : "Preparing orbit"}
            </div>
          )}
          {!background && sceneState === "error" && (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-gray-400">
              {isThai ? "ลองเปิดส่วนนี้อีกครั้งเมื่อเชื่อมต่ออินเทอร์เน็ต" : "Reconnect to the internet and revisit this section to load the visualization."}
            </div>
          )}
          {!background && <span className="pointer-events-none absolute bottom-5 right-5 text-xs uppercase tracking-widest text-gray-600">
            {isThai ? "ลากเพื่อสำรวจ" : "Drag to explore"}
          </span>}
        </div>
      </div>
    </div>
  );
}