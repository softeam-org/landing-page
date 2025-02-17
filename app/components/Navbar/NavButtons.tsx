import Link from "next/link";
import React from "react";
import { JSX } from "react";

export interface NavButtonsProps {
  url: string;
  label: string;
  icon?: React.ReactElement<React.HTMLAttributes<HTMLOrSVGElement>>;
}

export function NavButtons(props: NavButtonsProps): JSX.Element {
  return (
    <Link href={props.url}>
      <div className="flex flex-col items-center justify-center px-4 py-2 text-white">
        {props.icon && React.cloneElement(props.icon, { className: "w-5 h-5 mr-2" })}
        <span>{props.label}</span>
      </div>
    </Link>
  );
}
