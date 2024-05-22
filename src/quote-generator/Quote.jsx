export default function Quote({ text, author, onNewQuote }) {
  return (
    <figure className="text-center">
      <blockquote className="blockquote">{text}</blockquote>
      <figcaption className="blockquote-footer">
        <cite>{author}</cite>
      </figcaption>
      <button className="btn btn-primary" onClick={onNewQuote}>
        New Quote
      </button>
    </figure>
  );
}
