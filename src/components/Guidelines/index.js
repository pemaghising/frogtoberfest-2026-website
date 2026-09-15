import Submission from "./components/Submission";
import Eligibility from "./components/Eligibility";
import Judging from "./components/Judging";

export default function Guidelines() {
  return (
    <section className="screen guidelines screen-pad" id="guidelines">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Screen 04 &middot; Field Documentation</p>
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
