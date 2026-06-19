import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-logo">
        <img src={logo} alt="Sen Sulu" className="loader-img" />
        <h1>sen sulu</h1>
        <p>love yourself</p>
      </div>
    </div>
  );
}

export default Loader;