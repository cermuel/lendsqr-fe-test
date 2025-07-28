import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FilterInput = ({ onChange, placeholder, value, label }: InputProps) => {
  return (
    <div className="flex flex-col w-[230px]">
      <label className="text-[#545F7D] text-sm font-medium">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={"text"}
        placeholder={placeholder}
        className="h-10 px-4 outline-none text-sm w-full rounded-lg border border-[#213F7D4A]"
      />
    </div>
  );
};

export default FilterInput;
