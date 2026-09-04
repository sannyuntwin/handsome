"use client";

import { useEffect, useState } from "react";
import { Crosshair, RotateCcw, Rocket } from "lucide-react";

const ROUND_SECONDS = 20;

export default function SpaceGame({ language = "en" }: { language?: "en" | "th" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [target, setTarget] = useState({ top: 50, left: 50 });
  const isThai = language === "th";

  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft <= 0) {
      setIsPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => setTimeLeft((time) => time - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [isPlaying, timeLeft]);

  const moveTarget = () => {
    setTarget({
      top: Math.floor(Math.random() * 72) + 14,
      left: Math.floor(Math.random() * 78) + 11,
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setIsPlaying(true);
    moveTarget();
  };

  const catchSignal = () => {
    if (!isPlaying) return;
    setScore((currentScore) => {
      const nextScore = currentScore + 1;
      setBestScore((currentBest) => Math.max(currentBest, nextScore));
      return nextScore;
    });
    moveTarget();
  };

  return (
    <div className="space-glow relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#0b061d]/80 p-5 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] portfolio-accent"><Rocket size={16} /> {isThai ? "ภารกิจสำหรับผู้เยี่ยมชม" : "Visitor mission"}</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{isThai ? "จับสัญญาณ" : "Catch the signal."}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">{isThai ? "ทดสอบสมาธิสั้น ๆ จับสัญญาณให้ได้มากที่สุดก่อนภารกิจจะจบ" : "A tiny test of focus. Catch as many signals as possible before the orbit closes."}</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-500"><span><strong className="block text-2xl text-white">{score}</strong>{isThai ? "คะแนน" : "score"}</span><span><strong className="block text-2xl text-white">{bestScore}</strong>{isThai ? "สูงสุด" : "best"}</span><span><strong className="block text-2xl text-white">{timeLeft}s</strong>{isThai ? "เหลือ" : "left"}</span></div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(155,124,255,0.18),transparent_45%),#080414]" aria-label="Orbit Catch game area">
        <div className="pointer-events-none absolute inset-8 rounded-full border border-cyan-200/10" />
        <div className="pointer-events-none absolute inset-20 rounded-full border border-violet-300/10" />
        {isPlaying && <button type="button" onClick={catchSignal} aria-label={isThai ? "จับสัญญาณ" : "Catch the signal"} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3 text-cyan-100 transition-transform hover:scale-125 focus-visible:scale-125" style={{ top: `${target.top}%`, left: `${target.left}%` }}><span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/30" /><Crosshair className="relative" size={34} /></button>}
        <div className="absolute inset-0 flex items-center justify-center"><div className="text-center">{isPlaying ? <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{isThai ? "พบสัญญาณ" : "Signal detected"}</p> : <><p className="text-xs uppercase tracking-[0.25em] text-gray-500">{timeLeft === 0 ? (isThai ? `ภารกิจเสร็จสิ้น: จับได้ ${score} สัญญาณ` : `Mission complete: ${score} signals caught`) : (isThai ? "พร้อมเมื่อคุณพร้อม" : "Ready when you are")}</p><button type="button" onClick={startGame} className="mt-4 rounded-full bg-cyan-100 px-5 py-3 font-semibold text-slate-950 hover:bg-white">{timeLeft === 0 ? (isThai ? "เล่นอีกครั้ง" : "Play again") : (isThai ? "เริ่มภารกิจ" : "Launch mission")} <Rocket className="ml-2 inline" size={17} /></button></>}</div></div>
      </div>
      <button type="button" onClick={startGame} className="mt-5 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-100"><RotateCcw size={15} /> {isThai ? "รีเซ็ตภารกิจ" : "Reset mission"}</button>
    </div>
  );
}
