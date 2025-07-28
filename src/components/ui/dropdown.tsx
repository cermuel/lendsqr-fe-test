import React, { useState, useRef, useEffect } from "react";
// optional: or use inline SVG

type Option = {
  label: string;
  value: string | number;
};

type DropdownProps = {
  options: Option[];
  placeholder?: string;
  onSelect: (option: Option) => void;
  selected?: Option;
  label: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select...",
  onSelect,
  selected,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const current = selected || internalSelected;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    if (!selected) setInternalSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-[230px]">
      <label className="text-[#545F7D] text-sm font-medium">{label}</label>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full bg-white cursor-pointer border border-[#213F7D4A] h-10 rounded-lg px-4 py-2 flex items-center justify-between text-left hover:border-gray-400 focus:outline-none"
      >
        <span className="truncate text-sm text-gray-700">
          {current?.label || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 text-gray-700"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
