import banner from "../assets/home-banner.jpg";
import CategoryBar from "../components/CategoryBar";

function Home() {
  return (
    <main className="home">
      <img src={banner} alt="Sen Sulu" className="home-banner" />

      <section className="home-text">
        <h1>SenSulu</h1>

        <h3>SenSulu – өзіңді сүю бізден басталады.</h3>
        <h3>SenSulu – любовь к себе начинается с нас.</h3>
        <h3>SenSulu – self-love starts with us.</h3>

        <p>
          <b>KZ:</b> Біз әрбір қыз өзінің табиғи сұлулығын айқындайтын сапалы
          әрі сәнді косметикаға лайық деп сенеміз. SenSulu – стиль, макияж және
          қолжетімді люкстің үйлесімі. Біздің өнімдер премиум сапа мен мінсіз
          бағаны біріктіріп, ең жоғары стандарттарға сай декоративті
          косметиканы таңдауға мүмкіндік береді.
        </p>

        <p>
          <b>RU:</b> Мы верим, что каждая девушка заслуживает качественную и
          роскошную косметику, которая подчеркивает ее естественную красоту.
          SenSulu – это гармония стиля, макияжа и доступной роскоши. Наши
          продукты сочетают премиальное качество и идеальную цену.
        </p>

        <p>
          <b>EN:</b> We believe every woman deserves high-quality, luxurious
          cosmetics that enhance her natural beauty. SenSulu represents the
          harmony of style, makeup, and accessible luxury.
        </p>
      </section>
      <CategoryBar />
    </main>
  );
}

export default Home;