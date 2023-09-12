import PageIntro from "@/components/PageIntro";
import PortfolioGalleryPage from "@/components/PortfolioGallery";
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
    </>
  );
};

export default PortfolioPage;
