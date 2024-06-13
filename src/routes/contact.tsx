import ContactForm from "../components/page-specific-comps/ContactPage/ContactForm";
import ContactLinks from "../components/page-specific-comps/ContactPage/ContactLinks";
import PageHeader from "../components/shared-comps/PageHeader";

export default function ContactPage(): React.JSX.Element {
  return (
    <section className="flex w-full h-full items-center flex-col gap-10 py-12 px-0 sm:px-20 overflow-auto">
      <PageHeader pageKey="contact" />
      <div className="w-full flex flex-col md:flex-row rounded-xl bg-base-300 sm:border-[2px] sm:border-neutral grow h-content shadow-sm max-w-[1200px] md:max-h-[650px]">
        {/* Contact Links */}
        <ContactLinks />
        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}

// TODO: Need to set min and max values for all inputs

// TODO: Add current location (US)

// TODO: Validate & format phone number properly
