import Blob from "./Blob.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Reveal from "./Reveal.jsx";
import { ABOUT_PHOTOS, STATS } from "../data/site.js";

export default function About() {
  return (
    <section id="about">
      <Blob name="about__blob" />
      <div className="wrap">
        <div className="about">
          <div className="about__text">
            <div className="sec-head" style={{ marginBottom: 26 }}>
              <Eyebrow>About us</Eyebrow>
              <Reveal as="h2">We turn ideas into living stories</Reveal>
            </div>

            <Reveal as="p">
              Animakers is a 3D production studio founded in 2023 and based in
              <strong> Yerevan, Armenia.</strong> Our team brings together
              creative and technical talent to create high-quality visual
              content.
            </Reveal>
            <Reveal as="p">
              We work across a wide range of projects, including{" "}
              <strong>TV series</strong>,<strong>feature films</strong>,{" "}
              <strong>games</strong>, and <strong>commercials</strong>. From
              modeling and animation to lighting, rendering, compositing, and
              AI-assisted production, we provide a complete range of 3D
              production services tailored to the needs of each project.
            </Reveal>
            <Reveal as="p">
              Our team combines creativity, attention to detail, and a strong
              production workflow to deliver visuals and bring ideas to life.
            </Reveal>

            <Reveal className="about__quote">
              We believe animation is not just movement.
              <br />
              <span>
                It's emotion. It's story. It's the kind of magic that stays with
                the viewer.
              </span>
            </Reveal>

            <Reveal className="stats">
              {STATS.map(({ value, label }) => (
                <div className="stat" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="about__grid">
            {ABOUT_PHOTOS.map(({ src, alt }) => (
              <figure key={src}>
                <img src={src} alt={alt} />
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
