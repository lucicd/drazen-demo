import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Drazen&apos;s Demos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/accordion" className="nav-link">
                Accordion
              </Link>
              <Link to="/image-carousel" className="nav-link">
                Image Carousel
              </Link>
              <Link to="/quote-generator" className="nav-link">
                Quote Generator
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
