import NewsItem from "./NewsItem";

export default function News() {
  return (
    <div className="news">
      <h1 className="news__heading">New</h1>

      <NewsItem
        title="Hydrogen VS Electric Cars"
        content="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewsItem
        title="The Downsides of AI Artistry"
        content="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewsItem
        title="Is VC Funding Drying Up?"
        content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
}
