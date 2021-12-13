import React, { useEffect, useLayoutEffect } from "react";

export default function BasicUseLayoutEffect() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div>Ready</div>
}
