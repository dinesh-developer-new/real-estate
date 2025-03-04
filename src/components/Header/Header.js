import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.jpg" alt="logo" width={100} />
        <div className=" flexCenter h-menu">
          <a href="/">Recedencies</a>
          <a href="/">Our Values</a>
          <a href="/">Contact Us</a>
          <a href="/">Get Started</a>
          <button className="button">
            <a href="/">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
