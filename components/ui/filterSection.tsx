import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  items: string[];
  grid?: boolean; // for size grid
}

export function FilterSection({
  title,
  open,
  onToggle,
  items,
  grid,
}: FilterSectionProps) {
  return (
    <div className="space-y-2">
      <div
        className="font-medium flex items-center justify-between cursor-pointer pb-2"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {open && (
        <div
          className={
            grid
              ? "grid grid-cols-6 gap-2 mt-2"
              : "flex flex-col mt-2 space-y-1"
          }
        >
          {items.map((item) =>
            grid ? (
              <label
                key={item}
                className="flex items-center justify-center border border-gray-300 rounded-md h-10 w-10 cursor-pointer hover:bg-gray-100"
              >
                <Checkbox className="hidden" />
                <span>{item}</span>
              </label>
            ) : (
              <label
                key={item}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Checkbox />
                <span>{item}</span>
              </label>
            )
          )}
        </div>
      )}
    </div>
  );
}
