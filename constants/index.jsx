import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Portfolio",
    links: [
      { title: "San Francisco Project", href: "/portfolio/SanFran" },
      { title: "San Diego Project", href: "/portfolio/SanDiego" },
      { title: "Los Angeles Project", href: "/portfolio/LosAngeles" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/portfolio",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Portfolio", href: "/portfolio" },
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
