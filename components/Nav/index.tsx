import NavItem from "./NavItem";
import Image from "next/image";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import DefaultIcon from "../DefaultIcon";

const nav = [
  {
    label: "Getting started",
    route: "/start",
  },
  {
    label: "Custom icons",
    route: "/custom",
  },
  {
    label: "API",
    route: "/api",
  },
  {
    label: "Examples",
    route: "/examples",
  },
];

export default function Nav() {
  return (
    <nav className="w-full py-8 flex items-center max-w-5xl mx-auto px-8">
      <Logo />
      <div className="flex ml-auto gap-2">
        {nav.map(({ label, route }) => (
          <NavItem key={route} label={label} route={route} />
        ))}

        <ThemeButton />
      </div>
    </nav>
  );
}
