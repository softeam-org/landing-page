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
    <div className="flex flex-col items-center px-10 py-14 gap-4 rounded-md cursor-pointer bg-color-2">
      <Icon className="w-auto h-8 mb-2" />
      <p className="font-semibold text-2xl text-center">{valueName}</p>
    </div>
  );
}

export default ValueCard;
