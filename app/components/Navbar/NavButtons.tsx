import { leagueSpartan } from "@/app/ts/fonts";
import Link from "next/link";
import React, { JSX } from "react";

export interface NavButtonsProps {
  url: string;
  label: string;
  icon?: React.ReactElement<React.HTMLAttributes<HTMLOrSVGElement>>;
}

export function NavButtons(props: NavButtonsProps): JSX.Element {
  return (
    <Link href={props.url}>
      <div className="flex flex-col items-center justify-center px-1 py-1 sm:px-4 sm:py-2 text-white">
        {props.icon && React.cloneElement(props.icon, { className: "w-5 h-5" })}
        <span className={`${leagueSpartan.className} flex flex-col text-sm md:text-lg`}>{props.label}</span>
      </div>
    </Link>
  );
}
