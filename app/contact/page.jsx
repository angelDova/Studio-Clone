import ContactDetails from "@/components/ContactDetails";
import ShiftingContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import TerminalContact from "@/components/TerminalContact";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact Me" title="Let's work together">
        <p className="">
          Please fill out the form below and I will send over my pricing and
          further details. .
        </p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <TerminalContact />
          <ContactDetails />
          {/* <ShiftingContactForm /> */}
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
