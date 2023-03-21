import { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <button
        className={classNames(
          "p-4  py-2 border rounded-md bg-green-700 text-white font-bold",
          className
        )}
        {...rest}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
