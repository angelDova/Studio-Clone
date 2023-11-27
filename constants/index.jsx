import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Portfolio",
    links: [
      { title: "Belladonna’s Playground ", href: "/portfolio/SanFran" },
      { title: "La Lucha ", href: "/portfolio/SanDiego" },
      { title: "USER827305883500", href: "/portfolio/LosAngeles" },
      { title: "Untitled", href: "/portfolio/LosAngeles" },
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
