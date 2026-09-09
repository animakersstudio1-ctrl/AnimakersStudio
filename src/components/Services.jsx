import { Link } from "react-router-dom";
import Blob from "./Blob.jsx";
import Eyebrow from "./Eyebrow.jsx";
import Reveal from "./Reveal.jsx";
import { SERVICES } from "../data/services.js";
import { CONTACT } from "../data/site.js";

export default function Services() {
  return (
    <section id="services">
      <Blob name="services__blob" />
      <Blob name="services__blob-2" />
      <div className="wrap">
        <div className="sec-head center">
          <Eyebrow>What we do</Eyebrow>
          <Reveal as="h2">Services</Reveal>
          <Reveal as="p">Let’s create something great together.</Reveal>
        </div>

        <div className="svc">
          {SERVICES.map(({ Icon, title, text }, i) => (
            <Reveal className="svc__item" key={title} delay={i * 60}>
              <div className="svc__ico">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="svc__outro">
          We are always open to new projects and collaboration opportunities. If
          you are interested and would like to discuss details, just email us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or use the{" "}
          <Link to="/contact">Contact page</Link>.
        </Reveal>
      </div>
    </section>
  );
}
