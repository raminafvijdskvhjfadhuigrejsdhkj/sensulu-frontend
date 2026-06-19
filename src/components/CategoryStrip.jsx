import mascara from "../assets/category-icons/mascara.png";
import blush from "../assets/category-icons/blush.png";
import powder from "../assets/category-icons/powder.png";
import concealer from "../assets/category-icons/concealer.png";
import contour from "../assets/category-icons/contour.png";
import highlighter from "../assets/category-icons/highlighter.png";
import eyeshadow from "../assets/category-icons/eyeshadow.png";
import lipGloss from "../assets/category-icons/lip-gloss.png";
import puff from "../assets/category-icons/puff.png";
import lipPencil from "../assets/category-icons/lip-pencil.png";
import eyeliner from "../assets/category-icons/eyeliner.png";
import browPencil from "../assets/category-icons/brow-pencil.png";
import browGel from "../assets/category-icons/brow-gel.png";
import giftBox from "../assets/category-icons/gift-box.png";

function CategoryStrip() {
  const categories = [
    { name: "Тушь", image: mascara },
    { name: "Румяна", image: blush },
    { name: "Пудра", image: powder },
    { name: "Консилеры", image: concealer },
    { name: "Контуринг", image: contour },
    { name: "Хайлайтеры", image: highlighter },
    { name: "Тени", image: eyeshadow },
    { name: "Помады", image: lipGloss },
    { name: "Пуховки", image: puff },
    { name: "Карандаши для губ", image: lipPencil },
    { name: "Подводки", image: eyeliner },
    { name: "Карандаши для бровей", image: browPencil },
    { name: "Гели для бровей", image: browGel },
    { name: "Подарочные наборы", image: giftBox },
  ];

  return (
    <section className="category-strip">
      {categories.map((category) => (
        <div className="category-item" key={category.name}>
          <div className="category-circle">
            <img src={category.image} alt={category.name} />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </section>
  );
}

export default CategoryStrip;