import type { InputHTMLAttributes } from "react";
import "../../styles/components/input-filter.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FilterInput = ({ onChange, placeholder, value, label }: InputProps) => {
  return (
    <div className="filter-input">
      <label className="label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default FilterInput;
