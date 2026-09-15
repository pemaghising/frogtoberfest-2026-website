import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Beyond from "./components/Beyond";
import Timeline from "./components/Timeline";
import Guidelines from "./components/Guidelines";
import Recognition from "./components/Recognition";
import Registration from "./components/Registration";
import Resources from "./components/Resources";
import DemoDay from "./components/DemoDay";
import Footer from "./components/Footer";

export default function App() {
  /* ---- Timeline: fill rail + light up nodes as they scroll into view ---- */
  useEffect(() => {
    const rail = document.getElementById("tlRail");
    const fill = document.getElementById("tlFill");
    if (!rail || !fill) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) fill.style.transition = "none";

    function updateTimelineFill() {
      const railRect = rail.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.7;
      let progressPx = viewportCenter - railRect.top;
      progressPx = Math.max(0, Math.min(progressPx, railRect.height));
      const fraction = railRect.height > 0 ? progressPx / railRect.height : 0;
      fill.style.transform = "scaleY(" + fraction + ")";

      rail.querySelectorAll(".tl-node").forEach((node) => {
        const r = node.getBoundingClientRect();
        const nodeTop = r.top - railRect.top;
        node.classList.toggle("active", nodeTop <= progressPx);
      });
    }

    // rAF-throttled: scroll can fire far faster than the browser paints,
    // and this reads layout (getBoundingClientRect) on every node -- running
    // it unthrottled reads/writes layout on every scroll tick instead of
    // once per frame.
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateTimelineFill();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateTimelineFill();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ---- Nav CTA: only shown once the hero's own Enter Mission button
     scrolls out of view, so there's always one reachable on screen. ---- */
  useEffect(() => {
    const navCta = document.getElementById("navCta");
    const heroCta = document.querySelector(".hero-cta-row .btn-primary");
    if (!navCta || !heroCta) return undefined;

    if (!("IntersectionObserver" in window)) {
      navCta.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          navCta.classList.toggle("is-visible", !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  /* ---- Guidelines index: highlight the doc-block currently in view ---- */
  useEffect(() => {
    const docLinks = document.querySelectorAll(".doc-index a");
    if (!docLinks.length || !("IntersectionObserver" in window)) return undefined;

    const docSections = Array.prototype.map.call(docLinks, (link) =>
      document.querySelector(link.getAttribute("href"))
    );
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target);
          else visibleSections.delete(entry.target);
        });
        const active = docSections.find((section) => section && visibleSections.has(section));
        docLinks.forEach((link) => {
          link.classList.toggle("is-active", Boolean(active) && link.getAttribute("href") === "#" + active.id);
        });
      },
      { rootMargin: "-104px 0px -60% 0px" }
    );
    docSections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="grain" aria-hidden="true"></div>
      <div className="scanlines" aria-hidden="true"></div>

      <Nav />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Beyond />
        <Timeline />
        <Guidelines />
        <Recognition />
        <Registration />
        <Resources />
        <DemoDay />
      </main>

      <Footer />
    </>
  );
}
