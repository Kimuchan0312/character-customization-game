import React from "react";
import CustomizationOption from "./CustomizationOption";

const getOptionImageUrl = (category, optionIndex) => {
  if (category === "hats" || category === "glasses") {
    return `/images/accessories/${category}/${optionIndex}.png`;
  } else if (category.startsWith("layer")) {
    return `/images/clothes/${category}/${optionIndex}.png`;
  } else {
    return `/images/${category}/${optionIndex}.png`;
  }
};

const getDisplayName = (category) => {
  const displayNameMap = {
    body: "Body",
    eyes: "Eyes",
    hair: "Hair",
    mouths: "Mouth",
    noses: "Nose",
    eyebrows: "Eyebrow",
    hats: "Hats",
    glasses: "Glasses",
    layer_1: "Clothing (Layer 1)",
    layer_2: "Clothing (Layer 2)",
    layer_3: "Clothing (Layer 3",
  };
  return displayNameMap[category] || category;
};

const CustomizationCategory = ({ title, options }) => {
  return (
    <div className="customization-category">
      <h2>{getDisplayName(title)}</h2>
      <div className="options">
        {options.map((option, index) => (
          <CustomizationOption
            key={index}
            label={option.label}
            onClick={option.onClick}
            imageUrl={getOptionImageUrl(title, index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizationCategory;
