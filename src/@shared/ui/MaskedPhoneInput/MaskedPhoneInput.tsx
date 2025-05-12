"use client";

import { useMask } from "@react-input/mask";
import React from "react";
import { Input } from "../Input";

export const MASK = "+7 (___) ___ - __ - __";

export const MaskedInput = (
  props: Omit<React.HTMLProps<HTMLInputElement>, "type">
) => {
  const phoneInputRef = useMask({
    mask: MASK,
    replacement: {
      _: /\d/,
    },
    showMask: true,
  });

  return <Input {...props} ref={phoneInputRef} type="phone" />;
};
