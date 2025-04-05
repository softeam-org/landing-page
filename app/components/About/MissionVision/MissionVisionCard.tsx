import { poppins } from "@/app/ts/fonts";
import React from "react";
import { IconType } from "react-icons";

interface MisVisCardProps {
  misVisName: string;
  misVisText: string;
  misVisIcon: IconType;
}

function MissionVisionCard({ misVisName, misVisText, misVisIcon: Icon }: MisVisCardProps): React.JSX.Element {
  return (
    <div
      className={`flex flex-col w-7/10 max-xl:w-4/5 max-lg:w-11/12 max-md:w-full p-10 max-xl:px-10 max-xl:py-12
      max-md:py-8 gap-4 shadow-[0_0_5px_1px_#072763] ease-out duration-200
       rounded-md ${poppins.className} hover:bg-color-3`}
    >
      <div className="flex w-fit items-center gap-2 justify-center">
        <Icon className="w-auto h-10" />
        <h3 className="text-2xl font-bold">{misVisName}</h3>
      </div>
      <p className="text-sm font-medium tracking-wide max-xl:tracking-wider">{misVisText}</p>
    </div>
  );
}

export default MissionVisionCard;
