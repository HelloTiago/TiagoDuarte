import React from 'react'
import Header from 'components/header'

import styles from './Index.module.css'

const Index = () => {
  const contactRef = React.createRef()

  return (
    <div className="app">
      <div className="container">
        <Header contactRef={contactRef} title="Tiago Duarte" />

        <div className={styles.intro}>
          <h1 className={styles.introHeading}>
            Hey there, my name is <strong>Tiago Duarte</strong> <span className={styles.styleBreak}></span> and I build modern interfaces for the web
          </h1>

          <h2 className={styles.introSecondaryHeading}>
            I’m a UI Engineer specializing in modular React interfaces and applications, modern CSS and responsive Web design.
          </h2>
        </div>

        <div className={styles.projects}>
          <h4 className={styles.projectsHeading}>Featured Projects</h4>

          <div className={styles.project}>
            <a href="https://app.pricedigests.com" className={styles.projectImagePriceDigests}>
              <img src="/static/pricedigests.png" srcSet="/static/pricedigests@2x.png 2x" alt="Price Digests"/>
            </a>

            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>Price Digests</h3>

              <ul className={styles.projectAchievements}>
                <li>Rebuilt the app using a more modern and performant set of tools.</li>
                <li>Led the UI design implementation, using Zurb Fundation.</li>
                <li>Worked alongside another developer to implement major features such as user authentication and vehicle valuation pages with charts.</li>
              </ul>
            </div>
          </div>

          <div className={styles.project}>
            <a href="https://givepanel.com" className={styles.projectImageGivepanel}>
              <img src="/static/givepanel.png" srcSet="/static/givepanel@2x.png 2x" alt="GivePanel"/>
            </a>

            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>GivePanel</h3>

              <ul className={styles.projectAchievements}>
                <li>Developed multiple major new features in a short amount of time.</li>
                <li>Refactored and optimized the code, resulting in over 70% faster page loads.</li>
                <li>Implemented a more modular code structure, allowing the team to move faster when shipping new features.</li>
              </ul>
            </div>
          </div>

          <div className={styles.project}>
            <a href="https://kitewire.com" className={styles.projectImageKitewire}>
              <img src="/static/kitewire.png" srcSet="/static/kitewire@2x.png 2x" alt="Kitewire"/>
            </a>

            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>Kitewire</h3>

              <ul className={styles.projectAchievements}>
                <li>Led the UI design implementation for the marketing site and web application.</li>
                <li>Used Bootstrap SCSS to build the UI in a modular fashion, which made it easy for the team to build new pages and features quickly.</li>
              </ul>
            </div>
          </div>

          <div className={styles.project}>
            <a href="https://edacy.com" className={styles.projectImageEdacy}>
              <img src="/static/edacy.png" srcSet="/static/edacy@2x.png 2x" alt="edacy"/>
            </a>

            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>Edacy</h3>

              <ul className={styles.projectAchievements}>
                <li>Worked with a team of backend developers and designers to build a React MVP from scratch.</li>
                <li>Built a suite of reusable UI components and a style guide.</li>
                <li>Remained as a technical advisor and helped the team with new hires and technical decisions</li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={contactRef} className={styles.contact}>
          <h4 className={styles.contactHeading}>Get in touch</h4>

          <p className={styles.contactText}>
            Find me on <a href="https://twitter.com/HelloTiago">Twitter</a>, <a href="https://github.com/HelloTiago">Github</a>, <a href="https://linked.com/in/hellotiago">LinkedIn</a> or email me at <a href="mailto:hello@tiagoduarte.com">hello@tiagoduarte.com</a>. Don’t be shy!
          </p>

          <p className={styles.contactText}>Résume available upon request.</p>
        </div>

        <footer className={styles.footer}>
          &copy; Tiago Duarte 2020
        </footer>
      </div>
    </div>
  )
}

export default Index;
