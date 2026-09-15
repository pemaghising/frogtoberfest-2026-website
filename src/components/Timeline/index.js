import TimelineNode from "./components/TimelineNode";
import NODES from "./nodes";

export default function Timeline() {
  return (
    <section className="screen timeline screen-pad" id="timeline">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Screen 03 &middot; Mission Log</p>
            <h2 className="h2">Timeline</h2>
          </div>
          <span className="sec-head-right">Webinar &rarr; Demo Day</span>
        </div>

        <div className="tl-rail" id="tlRail">
          <div className="tl-fill" id="tlFill" aria-hidden="true"></div>

          {NODES.map((node) => (
            <TimelineNode key={node.phase} {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}
