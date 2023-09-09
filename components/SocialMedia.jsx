import Link from "next/link";
import clsx from "clsx";

import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
} from "react-icons/bs";

const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/arianarene/",
    icon: BsInstagram,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: BsFacebook,
  },
  {
    title: "Twitter",
    href: "https://www.Twitter.com/",
    icon: BsTwitter,
  },
  {
    title: "Discord",
    href: "https://www.Discord.com/",
    icon: BsDiscord,
  },
  {
    title: "Linkedin",
    href: "https://www.Linkedin.com/",
    icon: BsLinkedin,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
            target="_blank"
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
