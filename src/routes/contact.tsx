export default function ContactPage() {
  return (
    <div className="flex w-full h-full px-20 items-center">
      <div className="w-full flex rounded-md p-6 bg-primaryCard grow h-[500px] shadow-sm border-2 border-base-300">
        <div className="bg-base-100 flex-[2_2_0%] h-full">
          <div className="contact-info p-4 flex flex-col gap-2">
            <h2 className="text-xl">Contact Information</h2>
            <p className="text-sm">
              Description of whatver you need here for the contact form
            </p>
          </div>
        </div>
        <div className="flex-[3_3_0%] h-full p-4">
          <form className="contact-form" action="">
            FORM STUFF
          </form>
        </div>
      </div>
    </div>
  );
}

// !TODO: Find a way to fix the pt issue with the header in a single spot - don't do "pt-[112px] on every page"

// !TODO: Figure out theme and theme customization first (There aren't enough colors, you need to add some)

// DO THE ABOVE TODO FIRST!!!
