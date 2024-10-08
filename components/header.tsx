import Link from "next/link";

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
  const title = "Min nettside";
  return (
    <div className="bg-pink-100 p-5 boarder-b flex justify-between">
      <h1>{title}</h1>
      <div className="space-x-5 my-auto">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
