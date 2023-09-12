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
        <p className="">We can&apos;t wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          {/* <TerminalContact /> */}
          <ShiftingContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
