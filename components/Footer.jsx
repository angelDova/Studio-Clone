import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";

const NewsLetterForm = () => {
  return (
    <form>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neurtal-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration
      </p>
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="">
          <FooterNavigation />
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
