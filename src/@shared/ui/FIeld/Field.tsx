import React from "react";

export const Field = ({
  children,
  name,
}: React.PropsWithChildren & { name: string, error?: string }) => {
  return (
    <div>
      <label htmlFor={name}>
        {name}
        {children}
      </label>
    </div>
  );
};
