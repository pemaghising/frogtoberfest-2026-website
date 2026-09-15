import EnrollStep from "./components/EnrollStep";

export default function Registration() {
  return (
    <section className="screen registration screen-pad" id="registration">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="tag">Screen 06 &middot; Pilot Enrollment</p>
            <h2 className="h2">Registration</h2>
          </div>
        </div>

        <div className="enroll-steps">
          <EnrollStep idx="01" title="Pilot">
            Your name and contact: the person accountable for the mission.
          </EnrollStep>
          <EnrollStep idx="02" title="Team">
            Fly solo or crew up with up to 5 pilots total.
          </EnrollStep>
          <EnrollStep idx="03" title="Project">
            A working idea, concrete or still rough. Both are fine at this stage.
          </EnrollStep>
          <EnrollStep idx="04" title="Repository">
            A public repo link. This is where the build actually happens.
          </EnrollStep>
        </div>

        <div className="registration-cta">
          <p className="lede">
            Registration is open <strong>Sept 15&ndash;29, 2026</strong>. No prior AI experience required &mdash;
            just a real problem and the will to ship.
          </p>
        </div>
      </div>
    </section>
  );
}
