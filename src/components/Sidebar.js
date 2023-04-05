import React from "react";
import CustomizationPanel from "./CustomizationPanel";

export default function Sidebar({ categories }) {
  return (
    <aside className="sidebar">
      <div className="header">
       <h1>Character Customization Game</h1>
      </div>  
      <CustomizationPanel categories={categories} />
    </aside>
  );
}
