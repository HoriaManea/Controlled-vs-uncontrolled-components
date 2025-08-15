import React from "react";
import "./App.css";
export default function App() {
  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <main>
      <div>
        <label htmlFor="fullName">FullName</label>
        <input
          onChange={handleChange}
          id="fullName"
          name="fullName"
          type="text"
        />
      </div>
    </main>
  );
}
