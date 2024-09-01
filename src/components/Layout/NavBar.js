import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div
          id="w-node-d0b2aec1-f847-b49f-7fd2-296cbd987937-bd987936"
          className="mobile-menu"
        >
          <div
            id="w-node-d0b2aec1-f847-b49f-7fd2-296cbd987938-bd987936"
            className="nav-menu menu-opened"
          >
           
            <Link
              to="/"
              className="nav-link-wrapper menu-opened w-inline-block w--current"
            >
              <div className="nav-link">HOMEPAGE</div>
            </Link>
            <Link
              to="/About"
              className="nav-link-wrapper menu-opened w-inline-block"
            >
              <div className="nav-link">ABOUT ME</div>
            </Link>
            <Link
              to="/AllWorks"
              className="nav-link-wrapper menu-opened w-inline-block"
            >
              <div className="nav-link">ALL WORKS</div>
            </Link>
            <Link
              to="/Journal"
              className="nav-link-wrapper menu-opened w-inline-block"
            >
              <div className="nav-link">JOURNAL</div>
            </Link>
            <Link
              to="/Contact"
              className="nav-link-wrapper menu-opened w-inline-block"
            >
              <div className="nav-link">CONTACT</div>
            </Link>
            
          </div>
        </div>
        <div className="container nav">
          <div
            id="w-node-d0b2aec1-f847-b49f-7fd2-296cbd98794b-bd987936"
            className="desktop-menu"
          >
            <div
              id="w-node-d0b2aec1-f847-b49f-7fd2-296cbd98794c-bd987936"
              className="nav-menu left"
            >
              <Link
                to="/"
                className="nav-link-wrapper w-inline-block w--current"
              >
                <div className="nav-link">HOMEPAGE</div>
              </Link>
              <Link
                to="/about"
                className="nav-link-wrapper w-inline-block"
              >
                <div className="nav-link">ABOUT ME</div>
              </Link>
            </div>
            <Link
              to="/"
              className="nav-logo-wrapper w-inline-block w--current"
            >
              <img
                src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/661d0a9ccf83fcaf6645b732_Frame%201000005650.svg"
                loading="lazy"
                alt="Image"
                className="logo"
              />
            </Link>
            <div
              id="w-node-d0b2aec1-f847-b49f-7fd2-296cbd987956-bd987936"
              className="nav-menu"
            >
              <Link
                to="/projects"
                className="nav-link-wrapper w-inline-block"
              >
                <div className="nav-link contactb">ALL WORKS</div>
              </Link>
              <Link
                to="/blog"
                className="nav-link-wrapper w-inline-block"
              >
                <div className="nav-link contactb">JOURNAL</div>
              </Link>
              <Link
                to="/contact"
                className="nav-button w-inline-block"
              >
                <div className="nav-button-text">CONTACT</div>
                <div className="yellow-contact-button-mask nb" />
              </Link>
              <Link
                to="#"
                className="hamburger-menu w-inline-block"
              >
                <div
                  data-is-ix2-target={1}
                  className="lottie-logo"
                  data-animation-type="lottie"
                  data-src="https://assets-global.website-files.com/661d0a9ccf83fcaf6645b6fe/662a2bd6727aaffca3068ad1_UH73dlqPns%20(1).json"
                  data-loop={0}
                  data-direction={1}
                  data-autoplay={0}
                  data-renderer="svg"
                  data-default-duration={1}
                  data-duration={0}
                  data-ix2-initial-state={0}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
