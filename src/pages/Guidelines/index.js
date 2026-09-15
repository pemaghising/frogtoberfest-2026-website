import { useEffect } from "react";
import Submission from "./components/Submission";
import Eligibility from "./components/Eligibility";
import Judging from "./components/Judging";

export default function Guidelines() {
  /* ---- Sidebar index: highlight the doc-block currently in view ---- */
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
    <section className="screen guidelines screen-pad" id="guidelines">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Field Documentation</p>
            <h2 className="h2">Guidelines</h2>
          </div>
        </div>

        <div className="doc-layout">
          <nav className="doc-index" aria-label="Guidelines index">
            <a href="#submission">01 &middot; Submission</a>
            <a href="#eligibility">02 &middot; Eligibility</a>
            <a href="#judging">03 &middot; Judging Criteria</a>
          </nav>

          <div>
            <Submission />
            <Eligibility />
            <Judging />
          </div>
        </div>
      </div>
    </section>
  );
}
