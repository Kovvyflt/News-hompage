export default function NewsLetterItem({ img, number, title, content }) {
  return (
    <div className="newsLetter__parent">
      <figure className="newsLetter__figure">
        <img src={img} alt="" className="newsLetter__figure-img" />
      </figure>

      <div className="newsLetter__content">
        <p className="newsLetter__content-number">{number}</p>
        <h3 className="newsLetter__content-heading ">{title}</h3>
        <p className="newsLetter__content-text">
          {content}
        </p>
      </div>
    </div>
  );
}
