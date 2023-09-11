import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Portfolio",
    links: [
      { title: "Amazon Clone", href: "/portfolio/amazonclone" },
      { title: "Bazar e-commerce", href: "/portfolio/bazar" },
      { title: "Blog 101", href: "/portfolio/blog101" },
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
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
