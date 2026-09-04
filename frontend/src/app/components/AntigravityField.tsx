"use client";

import { useEffect, useRef } from "react";

const particles = [
  [8, 16], [18, 34], [28, 14], [39, 26], [51, 12], [63, 28], [76, 16], [91, 32],
  [12, 58], [24, 78], [36, 52], [48, 70], [60, 48], [72, 78], [84, 56], [95, 82],
  [7, 92], [30, 94], [55, 90], [78, 94], [90, 12], [44, 42], [67, 40], [15, 8],
];

export default function AntigravityField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const normalizedX = (pointerX / width - 0.5) * 2;
      const normalizedY = (pointerY / height - 0.5) * 2;
      field.style.setProperty("--cursor-x", `${pointerX}px`);
      field.style.setProperty("--cursor-y", `${pointerY}px`);
      field.style.setProperty("--tilt-x", `${normalizedY * -3}deg`);
      field.style.setProperty("--tilt-y", `${normalizedX * 3}deg`);

      field.querySelectorAll<HTMLElement>("[data-particle]").forEach((particle) => {
        const x = Number(particle.dataset.x) * width / 100;
        const y = Number(particle.dataset.y) * height / 100;
        const distanceX = x - pointerX;
        const distanceY = y - pointerY;
        const distance = Math.max(Math.hypot(distanceX, distanceY), 1);
        const force = Math.max(0, 1 - distance / 260);
        const push = force * force * 46;
        particle.style.transform = `translate3d(${(distanceX / distance) * push}px, ${(distanceY / distance) * push}px, 0)`;
      });
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    render();
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={fieldRef} className="antigravity-field" aria-hidden="true">
      <div className="antigravity-tilt-target">
        {particles.map(([x, y], index) => (
          <span
            key={`${x}-${y}`}
            data-particle
            data-x={x}
            data-y={y}
            className={`antigravity-particle antigravity-particle-${index % 3}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          >♥</span>
        ))}
      </div>
    </div>
  );
}