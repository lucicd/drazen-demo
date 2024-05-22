export default function DemoCard({ title, children }) {
  return (
    <div className="p-3 m-0 border-0 bd-example m-0 border-0">
      <div className="card">
        <h3 className="card-header">{title}</h3>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
