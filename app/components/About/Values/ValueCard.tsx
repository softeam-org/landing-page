import React from "react";
import { IconType } from "react-icons";

// Interface for the softeam values cards components:
interface ValueCardProps {
  valueName: string;
  valueIcon: IconType;
}

// Softeam values cards components
function ValueCard({ valueName, valueIcon: Icon }: ValueCardProps): React.JSX.Element {
  return (
    <div
      className="flex items-center justify-center rounded-md h-52 px-10
        max-lg:px-8 shadow-[0_0_5px_1px_#114e7e] ease-out duration-200 hover:bg-color-2"
    >
      <div className="flex flex-col gap-4 max-md:gap-6 max-xs:gap-7">
        <Icon className="w-auto h-8 max-lg:h-7 max-xs:h-8" />
        <p className="font-semibold text-2xl max-xl:text-xl max-lg:text-lg max-xs:text-xl text-center">{valueName}</p>
      </div>
    </div>
  );
}

export default ValueCard;
