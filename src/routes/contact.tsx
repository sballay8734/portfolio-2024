import ContactForm from "../components/page-comps/ContactPage/ContactForm";
import ContactLinks from "../components/page-comps/ContactPage/ContactLinks";
import PageHeader from "../components/page-comps/PageHeader";

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

// DO THE ABOVE TODO FIRST!!!
// TODO: Extract toast to custom hook

// TODO: Need to set min and max values for all inputs

// TODO: Add current location (US)

// TODO: Validate & format phone number properly

// TODO: Set max width on the main form+contact content
