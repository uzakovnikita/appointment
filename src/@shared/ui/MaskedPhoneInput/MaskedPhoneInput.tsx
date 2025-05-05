import { useMask } from "@react-input/mask";
import React from "react";

export const MASK = "+7 (___) ___ - __ - __";

export const MaskedInput = ({
  isChildrenFirst,
  children,
  ...rest
}: React.HTMLProps<HTMLInputElement> & {
  children?: React.ReactNode;
  isChildrenFirst?: boolean;
}) => {
  const phoneInputRef = useMask({
    mask: MASK,
    replacement: {
      _: /\d/,
    },
    showMask: true,
  });

  return (
    <>
      {isChildrenFirst && children}
      <input {...rest} ref={phoneInputRef} type="phone" />
      {!isChildrenFirst && children}
    </>
  );
};
