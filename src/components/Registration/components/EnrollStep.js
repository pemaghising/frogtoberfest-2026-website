export default function EnrollStep({ idx, title, children }) {
  return (
    <div className="enroll-step">
      <span className="idx">{idx}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
