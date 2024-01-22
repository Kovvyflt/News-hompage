import IntroBody from "./IntroBody";
import News from "./News";
import NewsLetter from "./NewsLetter";

export default function Body() {
  return (
    <>
      
      <div className="content__body">
        <IntroBody />
        <News />
      </div>

      <NewsLetter />
    </>
  );
}
