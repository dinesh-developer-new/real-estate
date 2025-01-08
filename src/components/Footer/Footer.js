import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.jpg" alt="" width={120} />
          <span className="secondaryText">
            This Website is developed using React Library and Css
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Contact Info</span>
          <span className="orangeText">Dinesh</span>
          <div className="flexCenter f-menu">
            <span>DM Development</span>
            <span>Coimbatore</span>
            <span>Tamilnadu</span>
            <span>642127</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
