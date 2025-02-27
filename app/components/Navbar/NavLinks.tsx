import { leagueSpartan } from "@/app/ts/fonts";
import Link from "next/link";
import { JSX } from "react";

export interface NavLinksProps {
  url: string;
  label: string;
}

export function NavLinks(props: NavLinksProps): JSX.Element {
  return (
    <div className="hidden h-full group sm:block">
      <div className="flex h-full group-hover:cursor-pointer items-center space-x-4">
        <Link
          href={props.url}
          className={`${leagueSpartan.className} rounded-md flex justify-center h-5/6 px-2 items-center
          font-normal text-white text-lg hover:bg-blue-1C58A8 cursor-pointer ease-out duration-200`}
        >
          <p>{props.label}</p>
        </Link>
      </div>
    </div>
  );
}
