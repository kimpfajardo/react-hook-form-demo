import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div
        className={classNames(
          "border border-slate-300 bg-white rounded-xl shadow-md p-6",
          className
        )}
        {...rest}
        ref={ref}
      />
    );
  }
);
Card.displayName = 'Card'