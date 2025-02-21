import { leagueSpartan } from "@/app/ts/fonts";
import Link from "next/link";
import { JSX } from "react";

export interface NavLinksProps {
  url: string;
  label: string;
}

export function NavLinks(props: NavLinksProps): JSX.Element {
  return (
    <div className="hidden sm:ml-4 sm:block">
      <div className="flex space-x-4">
        <Link
          href={props.url}
          className={`${leagueSpartan.className} rounded-md px-1 py-2 font-normal
           text-white text-lg hover:bg-blue-1C58A8`}
        >
          {props.label}
        </Link>
      </div>
    </div>
  );
}
