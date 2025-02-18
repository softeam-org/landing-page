import { leagueSpartan } from "@/app/ts/fonts";
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
        {props.icon && React.cloneElement(props.icon, { className: "" })}
        <span className={`${leagueSpartan.className} hidden md:flex md:flex-col text-lg`}>{props.label}</span>
      </div>
    </Link>
  );
}
