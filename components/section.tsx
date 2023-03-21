import classNames from "classnames";
import { Inter } from "next/font/google";
import { forwardRef, HTMLAttributes } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div
        className={classNames("w-full min-h-screen flex items-center justify-center", inter.className, className)}
        {...rest}
        ref={ref}
      />
    );
  }
);

Section.displayName = 'Section'
