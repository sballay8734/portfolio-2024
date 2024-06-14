import { ReactElement } from "react";
import { FaPhone, FaDiscord } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface ContactMethod {
  method: string;
  value: string;
  label: string;
  icon: ReactElement;
  hasRedirect: boolean;
}

interface SocialLink {
  name: string;
  icon: ReactElement;
  url: string;
}

export const contactMethods: ContactMethod[] = [
  {
    method: "phone",
    value: "tel:18562207821",
    label: "1-856-220-7821",
    icon: <FaPhone size={30} />,
    hasRedirect: true,
  },
  {
    method: "email",
    value: "mailto:shawnballay1@gmail.com",
    label: "shawnballay1@gmail.com",
    icon: <MdEmail size={30} />,
    hasRedirect: true,
  },
  {
    method: "discord",
    value: "",
    label: "sballay8734",
    icon: <FaDiscord size={30} />,
    hasRedirect: false,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "linkedin",
    icon: <FaLinkedin className="h-8 w-8 xs:h-12 xs:w-12" />,
    url: "https://www.linkedin.com/in/shawn-ballay-697608301/",
  },
  {
    name: "github",
    icon: <FaGithub className="h-8 w-8 xs:h-12 xs:w-12" />,
    url: "https://github.com/sballay8734",
  },
];
