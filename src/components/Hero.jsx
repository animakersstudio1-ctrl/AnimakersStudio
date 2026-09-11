import { useEffect, useRef, useState } from "react";
import asset from "../data/asset.js";

const REEL = Array.from({ length: 18 }, (_, i) =>
  asset(`/assets/video/reel-${String(i + 1).padStart(2, "0")}.mp4`),
);

const POSTER = asset("/assets/video/reel-poster.jpg");

export default function Hero() {
  const first = useRef(null);
  const second = useRef(null);
  const players = [first, second];

  const [slots, setSlots] = useState([0, 1]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    players[active].current?.play().catch(() => {});
  }, [active]);

  const handleEnded = (slot) => {
    if (slot !== active) return;
    const next = 1 - slot;
    setActive(next);
    setSlots((prev) => {
      const updated = [...prev];
      updated[slot] = (prev[next] + 1) % REEL.length;
      return updated;
    });
  };

  return (
    <section className="hero">
      <div className="hero__reel">
        {slots.map((index, slot) => (
          <video
            key={slot}
            ref={players[slot]}
            src={REEL[index]}
            poster={index === 0 ? POSTER : undefined}
            className={slot === active ? "is-active" : undefined}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleEnded(slot)}
          />
        ))}
        <div className="reel__badge">
          <i />
          SHOWREEL 2026
        </div>
      </div>
    </section>
  );
}
