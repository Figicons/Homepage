import Link from "next/link";

interface Props {
  label: string;
  route: string;
}

export default function NavItem({ label, route }: Props) {
  return (
    <Link href={route}>
      <a className="focus flex items-center justify-center group relative h-11 px-3">
        <span className="font-bold relative z-10 group-hover:text-white transition-colors">
          {label}
        </span>

        <div className="absolute w-full bottom-0 left-0 right-0 h-0 transition-all group-hover:h-full bg-secondary"></div>
      </a>
    </Link>
  );
}
