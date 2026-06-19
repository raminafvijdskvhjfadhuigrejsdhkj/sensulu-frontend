import mascara from "../assets/category-icons/mascara.png";
import blush from "../assets/category-icons/blush.png";
import powder from "../assets/category-icons/powder.png";
import concealer from "../assets/category-icons/concealer.png";
import contour from "../assets/category-icons/contour.png";
import highlighter from "../assets/category-icons/highlighter.png";
import eyeshadow from "../assets/category-icons/eyeshadow.png";
import lipgloss from "../assets/category-icons/lip-gloss.png";
import puff from "../assets/category-icons/puff.png";
import lippencil from "../assets/category-icons/lip-pencil.png";
import eyeliner from "../assets/category-icons/eyeliner.png";
import browpencil from "../assets/category-icons/brow-pencil.png";
import browgel from "../assets/category-icons/brow-gel.png";
import giftbox from "../assets/category-icons/gift-box.png";    



function CategoryBar() {
  return (
    <div className="category-bar">
      <div className="category-item">
        <img src={mascara} alt="Тушь" />
        <p>Mascara</p>
      </div>

      <div className="category-item">
        <img src={eyeshadow} alt="Тени" />
        <p>Eyeshadow</p>
      </div>

      <div className="category-item">
        <img src={lipgloss} alt="Помада" />
        <p>lip-gloss</p>
      </div>

      <div className="category-item">
        <img src={puff} alt="Пуховка" />
        <p>puff</p>
      </div>

      <div className="category-item">
        <img src={lippencil} alt="Карандаш для губ" />
        <p>Lip-pencil</p>
      </div>

      <div className="category-item">
        <img src={eyeliner} alt="Подводка" />
        <p>Eyeliner</p>
      </div>

      <div className="category-item">
        <img src={browpencil} alt="Карандаш для бровей" />
        <p>Brow-pencil</p>
      </div>

      <div className="category-item">
        <img src={browgel} alt="Гель для бровей" />
        <p>Brow-gel</p>
      </div>

      <div className="category-item">
        <img src={concealer} alt="Консилер" />
        <p>Concealer</p>
      </div>

      <div className="category-item">
        <img src={powder} alt="Пудра" />
        <p>Powder</p>
      </div>

      <div className="category-item">
        <img src={blush} alt="Румяна" />
        <p>Blush</p>
      </div>

      <div className="category-item">
        <img src={contour} alt="Контуринг" />
        <p>Contour</p>
      </div>

      <div className="category-item">
        <img src={highlighter} alt="Хайлайтер" />
        <p>Highlighter</p>
      </div>

      <div className="category-item">
        <img src={giftbox} alt="одарочные боксы" />
        <p>Gift-box</p>
      </div>
    </div>
  );
}

export default CategoryBar;