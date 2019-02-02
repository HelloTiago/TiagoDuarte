import React from 'react';

import {
  Container,
  Service,
  ImageContainer,
  ContentContainer,
  Details,
  DetailItem,
} from './homepage-main-services.css';

const HomepageMainServices = () => (
  <Container>
    <Service>
      <ImageContainer>
        <img
          src="/static/services/web-apps.png"
          srcSet="/static/services/web-apps@2x.png"
          alt="Web Applications"
        />
      </ImageContainer>

      <ContentContainer>
        <h6>Services</h6>
        <h2>Web Applications</h2>
        <p>
          Doesn’t matter if you are a bootstrap or a VC-backed startup. We help our clients with
          strategy, user research, testing, interface design, and development.
        </p>

        <Details>
          <DetailItem>
            <img src="/static/icons/human.svg" alt="Human-centered design approach" />
            <p>
              We have a human-centered design approach and every app we build is based on a custom
              Design System
            </p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/code.svg" alt="Modern, reliable stacks" />
            <p>We use modern, reliable stacks such as React.js, Node.js and Laravel</p>
          </DetailItem>
        </Details>
      </ContentContainer>
    </Service>

    <Service>
      <ContentContainer>
        <h6>Services</h6>
        <h2>E-commerce websites</h2>
        <p>
          We know how hard it is to start and grow an eCommerce business. We are ready to help you
          with strategy all the way to design and development.
        </p>

        <Details>
          <DetailItem>
            <img src="/static/icons/pencil.svg" alt="Bespoke design and development" />
            <p>Bespoke design and development</p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/email.svg" alt="Tailored email marketing campaigns" />
            <p>Tailored email marketing campaigns designed to boost your business</p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/camera.svg" alt="Product videos" />
            <p>Product videos, video campaigns, instructional videos</p>
          </DetailItem>

          <DetailItem>
            <img
              src="/static/icons/platforms.svg"
              alt="We work with the best eCommerce platforms"
            />
            <p>We work with some of the best eCommerce platforms such as Shopify and Woocommerce</p>
          </DetailItem>
        </Details>
      </ContentContainer>
      <ImageContainer>
        <img
          src="/static/services/e-commerce.png"
          srcSet="/static/services/e-commerce@2x.png"
          alt="E-commerce Websites"
        />
      </ImageContainer>
    </Service>

    <Service>
      <ImageContainer>
        <img
          src="/static/services/marketing-websites.png"
          srcSet="/static/services/marketing-websites@2x.png"
          alt="Marketing Websites"
        />
      </ImageContainer>
      <ContentContainer>
        <h6>Services</h6>
        <h2>Marketing Websites</h2>
        <p>
          Allow your company to be discovered online! We help you present your brand online through
          your own custom built website.
        </p>

        <Details>
          <DetailItem>
            <img src="/static/icons/platforms.svg" alt="Backed by a powerful CMS" />
            <p>
              Every website we build is backed by a powerful Content Management System, such as
              WordPress.
            </p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/pencil.svg" alt="Bespoke design and development" />
            <p>Bespoke design and development</p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/content.svg" alt="Content strategy and copywriting" />
            <p>Content strategy, copywriting, SEO</p>
          </DetailItem>

          <DetailItem>
            <img src="/static/icons/mobile.svg" alt="Responsive design as standard" />
            <p>Responsive design as standard</p>
          </DetailItem>
        </Details>
      </ContentContainer>
    </Service>
  </Container>
);

export default HomepageMainServices;
