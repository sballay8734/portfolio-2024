import { contactMethods, socialLinks } from "../../../data/contactData";

export default function ContactLinks(): React.JSX.Element {
  return (
    <div className="bg-neutral flex-[2_2_0%] h-full p-8 px-10 sm:rounded-md">
      <div className="contact-info flex flex-col gap-4 h-full">
        <h2 className="text-4xl font-semibold text-neutral-content text-center sm:text-left">
          Contact Information
        </h2>
        <p className="text-neutral-content text-center sm:text-left">
          Fill out the form or just email me directly!{" "}
          <span className="font-semibold">
            Email and text messages are the easiest way to get in contact with
            me.
          </span>
        </p>
        <address className="mt-6 sm:mt-10 sm:mb-10 flex flex-col gap-8 items-center sm:items-start">
          {contactMethods.map((method) => {
            const addressElement = (
              <div
                key={method.method}
                className="flex items-center gap-4 group text-neutral-content w-fit"
              >
                {method.icon}
                <span className="text-neutral-content not-italic font-normal">
                  {method.label}
                </span>
              </div>
            );
            // Return a link if contact method hasRedirect
            if (method.hasRedirect) {
              return (
                <a
                  key={method.method}
                  className="flex items-center gap-4 group text-neutral-content hover:text-accent transition-all duration-200 w-fit"
                  href={method.value}
                  target="_blank"
                  rel="noreferrer"
                >
                  {method.icon}
                  <span className="text-neutral-content group-hover:text-accent transition-all duration-200 not-italic font-normal">
                    {method.label}
                  </span>
                </a>
              );
            }
            // Return div if no redirect
            return addressElement;
          })}
        </address>
        <div className="mt-auto flex items-end justify-end">
          <ul className="hidden sm:flex gap-4">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  className="text-neutral-content hover:text-accent transition-all duration-200"
                  href={`${link.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
