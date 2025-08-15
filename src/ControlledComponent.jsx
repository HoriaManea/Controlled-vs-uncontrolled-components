import React from "react";
import { useState } from "react";

export default function ControlledComponent() {
  const [fullName, setFullName] = useState("");

  function handleEvent(event) {
    setFullName(event.target.value);
  }

  return (
    <main>
      <label htmlFor="fullName">FullName</label>
      <input
        value={fullName}
        onChange={handleEvent}
        id="fullName"
        name="fullName"
        type="text"
      />
    </main>
  );
}
