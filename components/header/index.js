import React from 'react'
import NextHead from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

const defaultDescription = "I’m a UI Engineer specializing in modular React interfaces and applications, modern CSS and responsive Web design."
const defaultOGURL = "https://tiagoduarte.com"

const Header = (props) => {
  const handleContactRefClick = (e) => {
    props.contactRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
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

      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>TD</a>
        </Link>

        <button onClick={handleContactRefClick} className={styles.contactLink}>Contact</button>
      </header>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  handleHowWeHelpScrollClick: PropTypes.func,
  handleContactFormScrollClick: PropTypes.func,
  contactRef: PropTypes.object
}

export default Header