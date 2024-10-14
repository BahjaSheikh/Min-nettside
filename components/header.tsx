import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Om meg",
    href: "/om-meg",
  },
];

export function Header() {
  const title = "Bahja Sheikh";
  return (
    <div className="dark:bg-blue-400 bg-pink-100 p-5 boarder-b flex justify-between">
      <h1 className="text-black">{title}</h1>
      <div className="space-x-5 my-auto">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            {route.title}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
