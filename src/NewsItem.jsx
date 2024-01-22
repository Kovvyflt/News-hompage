export default function NewsItem({ title, content }) {
  return (
    <div className="news__content">
      <div className="news__content-item">
        <h2 className="news__content-heading">{title}</h2>
        <p className="news__content-text">{content}</p>
      </div>
    </div>
  );
}
