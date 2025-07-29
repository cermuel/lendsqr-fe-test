import React, { useState, useRef, useEffect } from "react";
import "../../styles/components/dropdown.scss";

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
    <div ref={ref} className="dropdown">
      <label className="dropdown__label">{label}</label>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown__button"
      >
        <span className="dropdown__selected">
          {current?.label || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="dropdown__icon"
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
        <ul className="dropdown__options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="dropdown__option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
