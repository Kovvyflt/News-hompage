import img1 from "./assets/image-retro-pcs.jpg";
import img2 from "./assets/image-top-laptops.jpg";
import img3 from "./assets/image-gaming-growth.jpg";

import NewsLetterItem from "./NewsLetterItem";

export default function NewsLetter() {
  return (
    <div className="newsLetter">
      <NewsLetterItem
        img={img1}
        number="01"
        title="Reviving Retro PCs"
        content="What happens when old PCs are given modern upgrades?"
      />
      <NewsLetterItem
        img={img2}
        number="02"
        title="Top 10 Laptops of 2022"
        content="Our best picks for various needs and budgets."
      />
      <NewsLetterItem
        img={img3}
        number="03"
        title="The Growth of Gaming"
        content="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}
