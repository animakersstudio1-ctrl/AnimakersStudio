import { useEffect, useRef, useState } from "react";
import asset from "../data/asset.js";

const REEL = [
  asset("/assets/video/hero-1.mp4"),
  asset("/assets/video/hero-2.mp4"),
  asset("/assets/video/hero-3.mp4"),
];

const POSTER = asset("/assets/video/hero-poster.jpg");
const SLIDE_MS = 800;

export default function Hero() {
  const first = useRef(null);
  const second = useRef(null);
  const players = [first, second];

  const [slots, setSlots] = useState([0, 1]);
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(null);

  useEffect(() => {
    players[active].current?.play().catch(() => {});
  }, [active]);

  const handleEnded = (slot) => {
    if (slot !== active) return;
    const next = 1 - slot;
    setLeaving(slot);
    setActive(next);

    setTimeout(() => {
      setLeaving(null);
      setSlots((prev) => {
        const updated = [...prev];
        updated[slot] = (prev[next] + 1) % REEL.length;
        return updated;
      });
    }, SLIDE_MS);
  };

  const stateOf = (slot) => {
    if (slot === active) return "is-active";
    if (slot === leaving) return "is-leaving";
    return undefined;
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
            className={stateOf(slot)}
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
