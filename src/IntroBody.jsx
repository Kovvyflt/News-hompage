import mainImg from "./assets/image-web-3-desktop.jpg";

export default function IntroBody() {
  return (
    <div className="display">
      <figure className="display__container">
        <img src={mainImg} alt="" className="display__container-img"/>
      </figure>

      <div className="display__box">
        <div className="display__info">
          <h2 className="display__heading">The Bright Future of Web 3.0?</h2>
        </div>

        <div className="display__content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="btn__display">Read more</button>
        </div>
      </div>
    </div>
  );
}
