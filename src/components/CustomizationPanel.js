import React from "react";
import CustomizationCategory from "./CustomizationCategory";

export default function CustomizationPanel({ categories = []}) {
  return (
    <div className="customization-panel">
      {categories.map((category, index) => (
        <CustomizationCategory
          key={index}
          title={category.title}
          options={category.options}
        />
      ))}
    </div>
  );
}
