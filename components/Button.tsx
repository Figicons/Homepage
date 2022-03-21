import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

export default function Button({ children, size }: Props) {
  return (
    <button
      className={classNames(
        "bg-primary dark:bg-tertiary text-white dark:text-primary flex self-start relative group focus",
        {
          "px-4 py-2": size === "small",
          "px-8 py-3": size === "medium",
          "px-16 py-6 text-xl font-extrabold": size === "large",
        }
      )}
    >
      <div className="absolute w-full bottom-0 left-0 right-0 h-0 transition-all group-hover:h-full bg-secondary"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
