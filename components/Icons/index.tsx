import { useState } from "react";
import DisplayIcon from "../DisplayIcon";
import iconMap, { IconSet } from "./iconMap";
import IconSetPicker from "./IconSetPicker";

function search(searchQuery: string, iconSet: IconSet) {
  const needles = searchQuery
    .trim()
    .split(/\s+/)
    .map((n) => n.toLowerCase());

  const results = Object.entries(iconMap[iconSet]).filter(([name, obj]) => {
    const haystack = name.toLowerCase();
    return needles.every((needle) => haystack.includes(needle));
  });
  return results;
}

export default function Icons() {
  const [term, setTerm] = useState("");
  const [iconSet, setIconSet] = useState<IconSet>("phosphor-duotone");
  const totalIcons = Object.entries(iconMap[iconSet]).length;

  return (
    <div className="flex flex-col w-full mt-28">
      <div className="flex items-center justify-between w-full pb-2 gap-4">
        <input
          className="bg-transparent outline-none text-2xl font-semibold w-full py-4 placeholder:text-primary/60 dark:placeholder:text-tertiary/60"
          placeholder={`Search ${totalIcons} icons...`}
          onChange={(e) => setTerm(e.target.value)}
        />

        <IconSetPicker selectedSet={iconSet} setIconSet={setIconSet} />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t-2 border-primary/10 dark:border-tertiary/10">
        {search(term, iconSet).map(([name, obj]) => (
          <DisplayIcon key={name} name={name} {...obj} />
        ))}
      </div>
    </div>
  );
}
