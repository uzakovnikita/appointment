"use client";

import React from "react";

export const Comments = () => {
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        <textarea name="content" id=""></textarea>
        <button type="submit" style={{ minWidth: 20, height: 40 }}></button>
      </form>
      <div></div>
    </div>
  );
};
