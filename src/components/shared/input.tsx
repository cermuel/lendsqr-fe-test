import { useState, type InputHTMLAttributes } from "react";
import "../../styles/components/input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  onChange,
  placeholder,
  value,
  className = "",
  type,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`input-wrapper ${className}`}>
      <input
        onChange={onChange}
        value={value}
        type={inputType}
        className="input-field"
        placeholder={placeholder}
      />
      {type === "password" && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="toggle-button"
        >
          {showPassword ? "Hide" : "Show"}
        </span>
      )}
    </div>
  );
};

export default Input;
