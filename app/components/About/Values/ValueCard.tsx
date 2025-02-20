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
      className="flex flex-col items-center rounded-md cursor-pointer h-48
        shadow-[0_0_5px_1px_#114e7e] ease-out duration-200 hover:bg-color-2"
    >
      <Icon className="w-auto h-8" />
      <p className="font-semibold text-2xl max-xl:text-xl text-center">{valueName}</p>
    </div>
  );
}

export default ValueCard;
