import ContactDetails from "@/components/ContactDetails";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PortfolioGalleryPage from "@/components/PortfolioGallery";
import SocialMedia, { SocialMediaProfiles } from "@/components/SocialMedia";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Proven projects for real-world problems"
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>

        <PortfolioGalleryPage />
      </PageIntro>
      <ContactSection />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default PortfolioPage;
