import { iconMapDict, IconSet } from "./iconMap";
import * as Select from "@radix-ui/react-select";
import iconMap from "./iconMap";
import DefaultIcon from "../DefaultIcon";

interface Props {
  selectedSet: IconSet;
  setIconSet: (iconSet: IconSet) => void;
}

const sets = Object.keys(iconMap) as IconSet[];

export default function IconSetPicker({ selectedSet, setIconSet }: Props) {
  return (
    <Select.Root value={selectedSet} onValueChange={setIconSet}>
      <Select.Trigger className="px-4 flex items-center shrink-0 py-3 w-60 text-left font-semibold bg-primary text-tertiary dark:bg-tertiary dark:text-primary focus">
        <Select.Value>{iconMapDict[selectedSet]}</Select.Value>

        <div className="flex ml-auto">
          <DefaultIcon name="CaretDown" />
        </div>
      </Select.Trigger>

      <Select.Content className="overflow-hidden border-2 bg-primary border-primary dark:bg-tertiary dark:border-tertiary">
        <Select.ScrollUpButton className="flex h-8 items-center justify-center bg-primary text-tertiary/60 dark:text-primary/60 dark:bg-tertiary">
          <DefaultIcon name="CaretUp" />
        </Select.ScrollUpButton>

        <Select.Viewport>
          <Select.Group>
            <Select.Label className="px-4 py-2 mt-2 font-black text-xs uppercase text-tertiary dark:text-primary tracking-widest">
              Icon Sets
            </Select.Label>

            {sets.map((setName) => (
              <Select.Item
                className="flex items-center justify-between px-4 py-3 font-semibold cursor-pointer text-tertiary hover:bg-tertiary hover:text-primary dark:text-primary dark:hover:bg-primary dark:hover:text-tertiary focus:bg-tertiary focus:text-primary dark:focus:bg-primary dark:focus:text-tertiary outline-none w-full"
                key={setName}
                value={setName}
              >
                <Select.ItemText>{iconMapDict[setName]}</Select.ItemText>
                <Select.ItemIndicator className="ml-auto">
                  <DefaultIcon name="Check" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-8 items-center justify-center bg-primary text-tertiary/60 dark:text-primary/60 dark:bg-tertiary">
          <DefaultIcon name="CaretDown" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
}
