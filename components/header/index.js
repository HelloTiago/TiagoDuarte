import React from "react";
import NextHead from "next/head";
import PropTypes from "prop-types";

import GlobalStyle from "../../global.css";

const defaultDescription = "Hipp";
const defaultOGURL = "https://hipp.agency";

const Header = props => (
  <div>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ""}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ""} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
    </NextHead>

    <GlobalStyle />

    {/* <div className="container">
      <SubContainer>
        <Link href="/">
          <Logo>Tiago.</Logo>
        </Link>

        <Nav />
      </SubContainer>
    </div> */}
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  handleHowWeHelpScrollClick: PropTypes.func,
  handleContactFormScrollClick: PropTypes.func
};

export default Header;
