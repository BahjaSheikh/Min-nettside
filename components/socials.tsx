import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Github",
    href: "https://github.com",
    icon: <GithubIcon />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/bahjasheikh",
    icon: <LinkedinIcon />,
  },
  {
    title: "Mail",
    href: "mailto:{bahjasheikh@hotmail.com}",
    icon: <MailIcon />,
  },
];

export function Socials() {
  return (
    <div className="flex justify-center gap-4 font-semibold">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <div className="flex gap-3 text-black bg-gradient-to-tl from-purple-300 to-purple-50 py-1.5 px-4 rounded-full hover:underline underline-offset-2">
            <p>{link.icon}</p>
            <p>{link.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
