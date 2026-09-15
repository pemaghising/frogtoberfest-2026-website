import Faq from "./components/Faq";
import FAQS from "./faqs";

export default function Resources() {
  return (
    <section className="screen resources screen-pad" id="resources">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Screen 07 &middot; Field Manual</p>
            <h2 className="h2">Resources</h2>
          </div>
          <span className="sec-head-right">FAQ &middot; 10 Entries</span>
        </div>

        <div className="faq-grid">
          {FAQS.map((faq) => (
            <Faq q={faq.q} key={faq.q}>
              {faq.a}
            </Faq>
          ))}
          <Faq q="I have a question. What should I do?">
            Email{" "}
            <a href="mailto:events@lftechnology.com" style={{ textDecoration: "underline" }}>
              events@lftechnology.com
            </a>
          </Faq>
        </div>
      </div>
    </section>
  );
}
