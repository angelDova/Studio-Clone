import CardCarousel from "@/components/CardCarousel";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import StackedCardTestimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <span className="block mb-4 text-2xl text-indigo-600 font-medium ">
            Ariana Cordova
          </span>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Creative Director | Stylist | Set Designer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I am in the business of helping you achieve your creative vision
            through fashion.
          </p>
        </FadeIn>
      </Container>
      <CardCarousel />
      {/* <Clients /> */}
      <StackedCardTestimonials />
      <Services />
      <ContactSection />
    </main>
  );
}
