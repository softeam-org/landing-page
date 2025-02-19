import React from "react";
import { IconType } from "react-icons";

// Interface for the softeam values cards components:
interface ValueCardProps {
  valueName: string;
  valueText: string;
  valueIcon: IconType;
}

// Softeam values cards components:
function ValueCard({ valueName, valueText, valueIcon: Icon }: ValueCardProps): React.JSX.Element {
  return (
    <div>
      <div>
        <Icon />
        <p>{valueName}</p>
      </div>
      <p>{valueText}</p>
    </div>
  );
}

export default ValueCard;
