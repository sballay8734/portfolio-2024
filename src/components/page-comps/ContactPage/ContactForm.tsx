import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import LoadingSpinner from "../../LoadingSpinner";

type Inputs = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  reason?: "employment" | "contract work" | "collaboration" | "other" | null;
  message: string;
};

export default function ContactForm(): React.JSX.Element {
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
    <div className="flex-[3_3_0%] h-full p-6 px-10 bg-base-300 rounded-[inherit]">
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
        <button type="submit" className="btn btn-accent sm:self-end w-48">
          {isLoading ? <LoadingSpinner /> : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}
