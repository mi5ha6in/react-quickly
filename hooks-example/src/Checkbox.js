import React, { useState, useEffect } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setShecked((checked) => !checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}
