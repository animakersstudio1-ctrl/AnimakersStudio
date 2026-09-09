import Blob from "./Blob.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Reveal from "./Reveal.jsx";

export default function Intro() {
  return (
    <section id="intro">
      <Blob name="about__blob" />
      <div className="wrap">
        <div className="sec-head center">
          <Eyebrow>Studio</Eyebrow>
          <Reveal as="h2">Animakers Studio</Reveal>
        </div>

        <div className="intro__text">
          <Reveal as="p">
            Since 2023, Animakers Studio has been helping production houses
            bring their ideas to life through high-quality 3D animation and
            visual production.
          </Reveal>
          <Reveal as="p">
            We are your reliable outsourcing partner, supporting productions at
            every stage — from modeling and rigging to animation, lighting,
            rendering, and compositing.
          </Reveal>
          <Reveal as="p">
            Our experienced team works across TV series, feature films,
            commercials, and digital content, adapting to the creative and
            production needs of each project.
          </Reveal>
          <Reveal as="p" className="intro__closing">
            We are always open to new collaboration opportunities.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
