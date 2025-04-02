"use client";

import React from "react";

function BodyWrapper({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <div className="w-full min-h-screen flex flex-col overflow-x-hidden">{children}</div>;
}

export default BodyWrapper;
