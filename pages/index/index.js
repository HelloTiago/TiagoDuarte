import React from "react";
import Header from "components/header";
import { Intro, Emoji, Links, Small } from "./index.css";

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
            I love helping startups and small businesses with their online
            products. I can help you build and launch custom web applications
            and marketing websites that perform just as well as they look. But
            enough about me, how can I help you?
          </p>

          <Links>
            <p>
              <a href="mailto:hello@tiagoduarte.com">hello@tiagoduarte.com</a>
            </p>
            <p>
              <a href="https://twitter.com/HelloTiago">Twitter</a> /{" "}
              <a href="https://instagram.com/HelloTiago">Instagram</a>
            </p>
          </Links>

          <Small>Proper website coming very soon!</Small>
        </Intro>
      </div>
    </div>
  );
};

export default Index;
