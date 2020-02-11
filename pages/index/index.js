import React from "react";
import Header from "components/header";
import { Intro, Emoji, Links, Small } from "../../styles/index.css";

const Index = () => {
  return (
    <div className="app">
      <Header title="Tiago Duarte" />

      <div className="container">
        <Intro>
          <Emoji>👋</Emoji>
          <h1>
            Hey there, my name is Tiago and I build digital products for the
            web.
          </h1>

          <p>
            I’m a Front-end Developer with a passion for building modern and modular user interfaces for the web that give users a great experience. I like great design, scratching my own itch and continuously exploring new things.
          </p>

          <Links>
            <p>
              <a href="mailto:hello@tiagoduarte.com">hello@tiagoduarte.com</a>
            </p>
            <p>
              <a href="https://twitter.com/HelloTiago">Twitter</a> /{" "}
              <a href="https://github.com/HelloTiago">Github</a>
            </p>
          </Links>
        </Intro>
      </div>
    </div>
  );
};

export default Index;
