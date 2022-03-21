import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateEffect from "../hooks/useUpdateEffect";
import DefaultIcon from "./DefaultIcon";

export default function ThemeButton() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  useUpdateEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="focus flex items-center justify-center relative h-11 w-11 group"
      onClick={toggleTheme}
    >
      <span className="relative z-10 group-hover:text-white transition-colors">
        <DefaultIcon name={theme === "dark" ? "Sun" : "Moon"} />
      </span>

      <div className="absolute w-full bottom-0 left-0 right-0 h-0 transition-all group-hover:h-full bg-secondary"></div>
    </button>
  );
}
