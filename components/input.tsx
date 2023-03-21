import { forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, className, ...rest } = props;
  return (
    <div className={classNames("space-y-2", className)}>
      <p className="text-lg font-bold">{label}</p>
      <input
        className="border border-slate-300 rounded-lg p-2 w-full"
        ref={ref}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";
