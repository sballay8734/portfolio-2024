import { useForm, SubmitHandler } from "react-hook-form";

import { contactMethods, socialLinks } from "../data/contactData";

enum ContactReason {
  employment = "Employment",
  contract = "Contract Work",
  collaboration = "Collaboration",
}

type Inputs = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  reason?: ContactReason;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex w-full h-full px-20 items-center">
      <div className="w-full flex rounded-xl overflow-hidden bg-[#172340] grow h-[700px] shadow-sm border-2 border-base-200">
        {/* Contact Info */}
        <div className="bg-primary flex-[2_2_0%] h-full p-6">
          <div className="contact-info p-4 flex flex-col gap-4 h-full">
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
        <div className="flex-[3_3_0%] h-full p-8">
          <form
            className="flex flex-col justify-between h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name/Email/Phone Inputs */}
            <div className="grid grid-cols-2 gap-x-10">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                  {/* <span className="label-text-alt">Top Right label</span> */}
                </div>
                <input
                  type="text"
                  placeholder="John"
                  className={`input input-bordered w-full max-w-xs ${errors.firstName ? "border-error" : ""}`}
                  autoComplete="off"
                  {...register("firstName", { required: true })}
                />
                {/* mTODO: Might need these spans to show errors (you removed them from the other inputs) */}
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
                  {...register("lastName")}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="text"
                  placeholder="Email address"
                  className={`input input-bordered w-full max-w-xs ${errors.email ? "border-error" : ""}`}
                  {...register("email", { required: true })}
                />
                <div className="label">
                  <span className="label-text-alt h-[16px]"></span>
                  {errors.email && (
                    <span className="label-text-alt text-error">
                      This field is required
                    </span>
                  )}
                </div>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Phone</span>
                </div>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone")}
                />
              </label>
            </div>

            <div className="divider w-full mx-auto"></div>

            {/* Reason Checkbox */}
            <fieldset {...register("reason")}>
              <legend className="mb-4 font-bold">
                What is the reason you are reaching out? (Optional)
              </legend>
              <div className="flex gap-10">
                <p className="flex items-center gap-2">
                  <input
                    name="colorOption"
                    value="employment"
                    type="checkbox"
                    id="purple"
                    className="checkbox-primary"
                  />
                  <label htmlFor="purple">Employment</label>
                </p>
                <p className="flex items-center gap-2">
                  <input
                    name="colorOption"
                    type="checkbox"
                    id="magenta"
                    value="contract"
                    className="checkbox-primary"
                  />
                  <label htmlFor="magenta">Contract Work</label>
                </p>
                <p className="flex items-center gap-2">
                  <input
                    name="colorOption"
                    type="checkbox"
                    id="aubergine"
                    value="collaboration"
                    className="checkbox-primary"
                  />
                  <label htmlFor="aubergine">Collaboration</label>
                </p>
              </div>
            </fieldset>

            <div className="divider w-full mx-auto"></div>

            {/* Message Input */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className={`textarea textarea-bordered h-24 ${errors.message ? "border-error" : ""}`}
                placeholder="Write your message..."
                {...register("message", { min: 15, max: 1000, required: true })}
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
            <input className="btn btn-secondary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

// !TODO: Find a way to fix the pt issue with the header in a single spot - don't do "pt-[112px] on every page"

// !TODO: Figure out theme and theme customization first (There aren't enough colors, you need to add some)

// DO THE ABOVE TODO FIRST!!!

// TODO: Add discord contact info?

// TODO: Add current location (US)

// TODO: Fix style of this page and colors
