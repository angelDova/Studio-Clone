import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import Image from "next/image";
import React from "react";
import AboutImg from "@/public/images/AboutImg.jpg";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About" title="Strength in collaboration">
        <p>
          Ariana Cordova is an LA-based creator that specializes in fashion
          styling and photography. She is pursuing her Bachelor of Arts in
          Apparel Merchandising and Design at California State Polytechnic
          University, Pomona. Her projects reflect personal artistic themes
          through culture, femininity, and identity. Her goal is to connect and
          communicate through fashion.
        </p>
        <div className="w-full h-auto m-auto shadow-xl mt-12 shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, dolor. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi, dolor. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sequi, dolor. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi, dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, dolor. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi, dolor. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sequi, dolor. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi, dolor.
          </p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35+" label="Clients" />
          <StatListItem value="75+" label="Projects" />
          <StatListItem value="100+" label="Photos Taken" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
