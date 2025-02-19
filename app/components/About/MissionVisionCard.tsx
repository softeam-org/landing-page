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
    <div className={`flex flex-col w-2/3 p-10 gap-4 rounded-md ${poppins.className} bg-color-2`}>
      <div className="flex w-fit items-center gap-2 justify-center">
        <Icon />
        <h3 className="text-2xl font-bold">{misVisName}</h3>
      </div>
      <p className="text-sm font-medium tracking-wide">{misVisText}</p>
    </div>
  );
}

export default MissionVisionCard;
