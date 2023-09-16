import { useState } from "react";
import "./App.css";

function App() {
  //state and click handler for the mobile display drop down menu
  const [toggledropDown, setToggleDropDown] = useState(false);

  function hamurgerClickHandler() {
    document.getElementById("white-triangle").style.display = toggledropDown
      ? "none"
      : "block";
    document.getElementById("nav-list").style.display = toggledropDown
      ? "none"
      : "block";

    setToggleDropDown((toggledropDown) => !toggledropDown);
  }

  return (
    <>
      <header>
        <nav>
          <img className="logo" src="./images/logo.svg" alt="logo" />
          <div id="white-triangle"></div>
          <ul id="nav-list" className="nav-list">
            <li className="nav-link">About</li>
            <li className="nav-link">Services</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Contact</li>
          </ul>
          <div className="mobile-link">
            <img
              src="./images/icon-hamburger.svg"
              alt="hamburger icon"
              onClick={hamurgerClickHandler}
            />
          </div>
        </nav>
        <section className="landing">
          <h1>WE ARE CREATIVES</h1>
          <img
            id="arrow-icon"
            src="./images/icon-arrow-down.svg"
            alt="downward pointing arrow"
          />
        </section>
      </header>
      <main>
        <section className="services-grid">
          <article className="services-transform">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#">
              Learn more<div></div>
            </a>
          </article>
          <img
            className="services-egg"
            src="./images/desktop/image-transform.jpg"
            alt="Egg picture for transformation"
          />
          <img
            className="services-cup"
            src="./images/desktop/image-stand-out.jpg"
            alt="Cup image for stand out"
          />
          <article className="services-transform">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="#">
              Learn more<div></div>
            </a>
          </article>
        </section>
        <section className="graphic-n-photo-grid">
          <article className="graphic-design">
            <h3>Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </article>
          <article className="photography">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </article>
        </section>
        <section className="testimonials-grid">
          <h4>Client testimonials</h4>
          <article className="emily">
            <img src="./images/image-emily.jpg" alt="Emily's picture" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h5>Emily R.</h5>
            <p>Marketing Director</p>
          </article>
          <article className="thomas">
            <img src="./images/image-thomas.jpg" alt="Thomas's picture" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h5>Thomas S.</h5>
            <p>Chief Operating Officer</p>
          </article>
          <article className="jennie">
            <img src="./images/image-jennie.jpg" alt="Jennie's picture" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h5>Jennie F.</h5>
            <p>Business Owner</p>
          </article>
        </section>
        <section className="image-gallery-grid">
          <img
            src="./images/desktop/image-gallery-milkbottles.jpg"
            alt="Image gallery milk bottles"
          />
          <img
            src="./images/desktop/image-gallery-orange.jpg"
            alt="Image gallery orange"
          />
          <img
            src="./images/desktop/image-gallery-cone.jpg"
            alt="Image gallery waffle cone"
          />
          <img
            src="./images/desktop/image-gallery-sugarcubes.jpg"
            alt="Image gallery sugar cube stack"
          />
        </section>
      </main>
      <footer>
        <img className="footer-logo" src="./images/logo.svg" alt="logo" />
        <ul className="footer-nav-list">
          <li className="footer-nav-link">About</li>
          <li className="footer-nav-link">Services</li>
          <li className="footer-nav-link">Projects</li>
        </ul>
        <ul className="icon-list">
          <li className="icon-link">
            <img src="./images/icon-facebook.svg" alt="Facebook icon" />
          </li>
          <li className="icon-link">
            <img src="./images/icon-instagram.svg" alt="Instagramicon" />
          </li>
          <li className="icon-link">
            <img src="./images/icon-pinterest.svg" alt="Pinterest icon" />
          </li>
          <li className="icon-link">
            <img src="./images/icon-twitter.svg" alt="Twitter icon" />
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
