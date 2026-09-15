export default function Faq({ q, children }) {
  return (
    <div className="faq">
      <h3>{q}</h3>
      <p>{children}</p>
    </div>
  );
}
