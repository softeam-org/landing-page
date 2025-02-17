import Link from "next/link";
import { JSX } from "react";

export interface NavLinksProps {
  url: string;
  label: string;
}

export function NavLinks(props: NavLinksProps): JSX.Element {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <Link href={props.url} className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-1C58A8">
          {props.label}
        </Link>
      </div>
    </div>
  );
}
