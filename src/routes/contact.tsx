import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

import LoadingSpinner from "../components/LoadingSpinner";
import { contactMethods, socialLinks } from "../data/contactData";

type Inputs = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  reason?: "employment" | "contract work" | "collaboration" | "other" | null;
  message: string;
};

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: null,
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async () => {
    setIsLoading(true);
    try {
      await toast.promise(
        emailjs.sendForm(
          // !TODO: Move these to .env
          "service_vbiq6kw",
          "template_7cbzvlf",
          "#contactForm",
          "fvsYIQxyCsB8x_27f",
        ),
        {
          pending: "Sending email...",
          success: "Message received!",
          error: "Something went wrong",
        },
      );
      // await emailjs.sendForm(
      //   "service_vbiq6kw",
      //   "template_7cbzvlf",
      //   "#contactForm",
      //   "fvsYIQxyCsB8x_27f",
      // );

      setIsLoading(false);
      reset();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="flex w-full h-full sm:px-20 pb-10 items-center flex-col gap-10 pt-[112px] overflow-auto px-0">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p>Want to reach out? Just send me a message!</p>
      </header>
      <div className="w-full flex flex-col md:flex-row rounded-xl bg-base-100 border-[2px] border-[#2a2d3d] grow h-content shadow-sm max-w-[1200px]">
        {/* Contact Info */}
        <div className="bg-secondary/80 flex-[2_2_0%] h-full p-8 px-10 rounded-[inherit]">
          <div className="contact-info flex flex-col gap-4 h-full">
            <h2 className="text-4xl font-semibold text-primary-content">
              Contact Information
            </h2>
            <p className="text-primary-content">
              Fill out the form or just email me directly!{" "}
              <span className="font-semibold">
                Email and text messages are the easiest way to get in contact
                with me.
              </span>
            </p>
            <address className="mt-10 flex flex-col gap-8">
              {contactMethods.map((method) => {
                return (
                  <a
                    key={method.method}
                    className="flex items-center gap-4 text-white hover:text-base-300 transition-all duration-200"
                    href={method.value}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {method.icon}
                    <span className="text-primary-content not-italic font-normal">
                      {method.label}
                    </span>
                  </a>
                );
              })}
            </address>
            <div className="mt-auto">
              <ul className="flex gap-4">
                {socialLinks.map((link) => {
                  return (
                    <a
                      key={link.name}
                      className="text-white hover:text-base-300 transition-all duration-200"
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
        {/* Form */}
        {/* !TODO: Why is bg-neutral not working for light here? vvvvvv */}
        {/* NOTE: IT'S THE CUPCAKE THEME NEUTRAL COLOR */}
        <div className="flex-[3_3_0%] h-full p-6 px-10 bg-base-100 rounded-[inherit]">
          {/* !TODO: And why are inputs changed to rounded on theme change */}
          <form
            id="contactForm"
            className="flex flex-col justify-between h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name/Email/Phone Inputs */}
            <div className="grid grid-cols-2 gap-x-4 lg:gap-x-10">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    <span className="text-error">* </span>First Name
                  </span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </div>
                <input
                  type="text"
                  placeholder="John"
                  className={`input input-bordered w-full max-w-xs ${errors.firstName ? "border-error" : ""}`}
                  autoComplete="off"
                  {...register("firstName", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                <div className="label">
                  <span className="label-text-alt h-[16px]"></span>
                  {errors.firstName && (
                    <span className="label-text-alt text-error">
                      This field is required
                    </span>
                  )}
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered w-full max-w-xs"
                  {...register("lastName", { maxLength: 30 })}
                />
                <div className="label">
                  <span className="label-text-alt h-[16px]"></span>
                  {errors.lastName && (
                    <span className="label-text-alt text-error">
                      30 characters max
                    </span>
                  )}
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    <span className="text-error">* </span>Email
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Email address"
                  className={`input input-bordered w-full max-w-xs ${errors.email ? "border-error" : ""}`}
                  {...register("email", {
                    required: true,
                    maxLength: 30,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <div className="label">
                  <span className="label-text-alt h-[16px]"></span>
                  {errors.email && (
                    <span className="label-text-alt text-error">
                      Must be a valid email address
                    </span>
                  )}
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Phone</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone")}
                />
                <div className="label">
                  <span className="label-text-alt h-[16px]"></span>
                  {errors.phone && (
                    <span className="label-text-alt text-error">
                      Must be a valid phone number
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* Reason Checkbox */}
            <fieldset>
              <legend className="mb-4 font-bold">
                What is the reason you are reaching out? (Optional)
              </legend>
              <div className="flex gap-x-10 gap-y-2 flex-wrap">
                <p className="flex items-center gap-2">
                  <input
                    id="employment"
                    value="employment"
                    type="radio"
                    className="checkbox-primary"
                    {...register("reason")}
                  />
                  <label htmlFor="employment">Employment</label>
                </p>
                <p className="flex items-center gap-2">
                  <input
                    id="contractWork"
                    value="contract work"
                    type="radio"
                    className="checkbox-primary"
                    {...register("reason")}
                  />
                  <label htmlFor="contractWork">Contract Work</label>
                </p>
                <p className="flex items-center gap-2">
                  <input
                    id="collaboration"
                    value="collaboration"
                    type="radio"
                    className="checkbox-primary"
                    {...register("reason")}
                  />
                  <label htmlFor="collaboration">Collaboration</label>
                </p>
                <p className="flex items-center gap-2">
                  <input
                    id="other"
                    value="other"
                    type="radio"
                    className="checkbox-primary"
                    {...register("reason")}
                  />
                  <label htmlFor="other">Other</label>
                </p>
              </div>
            </fieldset>

            <div className="divider w-full mx-auto my-0"></div>

            {/* Message Input */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">
                  <span className="text-error">* </span>Message
                </span>
              </div>
              <textarea
                className={`textarea textarea-bordered h-24 ${errors.message ? "border-error" : ""}`}
                placeholder="Write your message..."
                {...register("message", {
                  minLength: 15,
                  maxLength: 1000,
                  required: true,
                })}
              ></textarea>
              <div className="label">
                <span className="label-text-alt h-[16px]"></span>
                {errors.message && (
                  <span className="label-text-alt text-error">
                    This field is required
                  </span>
                )}
              </div>
            </label>
            <button type="submit" className="btn btn-secondary self-end w-48">
              {isLoading ? <LoadingSpinner /> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// !TODO: Figure out theme and theme customization first (There aren't enough colors, you need to add some)

// !TODO: Move form to it's own component with it's own state

// DO THE ABOVE TODO FIRST!!!
// TODO: Extract toast to custom hook

// TODO: Checkboxes should check when clicking the label

// TODO: Need to set min and max values for all inputs

// TODO: Add discord contact info?

// TODO: Add current location (US)

// TODO: Fix style of this page and colors

// TODO: Validate & format phone number properly

// TODO: Set max width on the main form+contact contetn
