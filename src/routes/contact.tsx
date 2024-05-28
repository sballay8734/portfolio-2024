export default function ContactPage() {
  return (
    <div className="flex w-full h-full items-center px-20">
      <div className="border-2 border-red-300 w-full">
        <div className="contact-info"></div>
      </div>
      <div className="border-2 border-blue-300 w-full">
        <form className="contact-form" action=""></form>
      </div>
    </div>
  );
}

// !TODO: Find a way to fix the pt issue with the header in a single spot - don't do "pt-[112px] on every page"

// DO THE ABOVE TODO FIRST!!!
