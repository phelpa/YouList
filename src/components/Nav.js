import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <header className="bg-white black-80 tc pv4">
      {
        <a
          className="bg-black-80 ba b--black dib pa3 w2 h2 br-100"
          href="/"
        ></a>
      }
      {/*<a className="circle bw4 bg-white-80 ba b--black dib pa5 w4 h4 br-100" href="/">
      </a>*/}
      <h1 className="mt2 mb0 baskerville i fw1 f1">YouList</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">
        your own customized videos page
      </h2>
      <nav className="paddedtop bt bb tc mw7 center mt4">
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-grey dib pa3 ph4-l"
          href="/"
        >
          Home
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-grey dib pa3 ph4-l"
          href="/shop"
        >
          Shop
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-grey dib pa3 ph4-l"
          href="/about"
        >
          About
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-grey dib pa3 ph4-l"
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Nav;
