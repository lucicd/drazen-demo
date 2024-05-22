export default function Error({ title, message, onConfirm }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <h4 className="alert-heading">{title}</h4>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onConfirm}
          ></button>
        </div>
      )}
    </div>
  );
}
