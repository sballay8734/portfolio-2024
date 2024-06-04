import { FaPhone, FaDiscord } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const contactMethods = [
  {
    method: "phone",
    value: "tel:18562207821",
    label: "1-856-220-7821",
    icon: <FaPhone size={30} />,
  },
  {
    method: "email",
    value: "mailto:shawnballay1@gmail.com",
    label: "shawnballay1@gmail.com",
    icon: <MdEmail size={30} />,
  },
  {
    method: "discord",
    value: "",
    label: "sballay8734",
    icon: <FaDiscord size={30} />,
  },
];

export const socialLinks = [
  {
    name: "linkedin",
    icon: <FaLinkedin color="" size={30} />,
    url: "https://www.linkedin.com/in/shawn-ballay-697608301/",
  },
  {
    name: "github",
    icon: <FaGithub size={30} />,
    url: "https://github.com/sballay8734",
  },
];

// TODO: Add types for these
