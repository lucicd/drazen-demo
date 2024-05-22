import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MainNavigation() {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <header>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link onClick={collapseNav} to="/" className="navbar-brand">
            Drazen&apos;s Demos
          </Link>
          <button
            ref={navButton}
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
          <div
            ref={linksContainerRef}
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink onClick={collapseNav} to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink
                onClick={collapseNav}
                to="/accordion"
                className="nav-link"
              >
                Accordion
              </NavLink>
              <NavLink
                onClick={collapseNav}
                to="/image-carousel"
                className="nav-link"
              >
                Image Carousel
              </NavLink>
              <Link
                onClick={collapseNav}
                to="/quote-generator"
                className="nav-link"
              >
                Quote Generator
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
