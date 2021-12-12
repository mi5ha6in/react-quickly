import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export default function AnyKeyToRender() {
  const words = ['sick', 'powder', 'day']
  useAnyKeyToRender();
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return <h1>Open the console</h1>;
}
