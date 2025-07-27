import type { ButtonHTMLAttributes, ReactNode } from "react";
import "../../styles/components/button.scss";

type Variant = "default" | "outlined" | "danger-outlined" | "colored-outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
