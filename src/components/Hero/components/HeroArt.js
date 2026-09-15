export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="false">
      <div className="blueprint-grid" aria-hidden="true"></div>
      <img className="hero-cloud hero-cloud-back" src="/img/cloud-2.png" alt="" aria-hidden="true" loading="lazy" />
      <div className="hero-figure">
        <span className="hero-annot" aria-hidden="true">
          UNIT&#8209;07 &middot; PILOT: HUMAN
        </span>
        <picture>
          <img
            src="/img/hero-pilot-tall-v2.png"
            alt="Frog Mecha with its pilot seated on its shoulder"
            width="935"
            height="1062"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <img className="hero-cloud hero-cloud-front" src="/img/cloud-1.png" alt="" aria-hidden="true" loading="lazy" />
    </div>
  );
}
