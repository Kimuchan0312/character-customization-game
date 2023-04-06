import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Sidebar from "./components/Sidebar";
import { getOptionImageUrl } from "./utils";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
};


const generateCustomizationOptions = (category, count, setSelectedOptions) => {
  const options = [];
  for (let i = 1; i <= count; i++) {
    options.push({
      label: `${category}_${i}`,
      imageUrl: getOptionImageUrl(category, i),
      onClick: () => {
        setSelectedOptions((prevOptions) => ({
          ...prevOptions,
          [category]: i,
        }));
      },
    });
  }
  return options;
};

function App() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const customizationCategories = Object.entries(total).map(
    ([category, count]) => {
      return {
        title: category,
        options: generateCustomizationOptions(
          category,
          count,
          setSelectedOptions
        ),
      };
    }
  );

  const avatarImageUrls = {
    body: `/images/body/${selectedOptions.body || 1}.png`,
    eyes: `/images/eyes/${selectedOptions.eyes || 2}.png`,
    hair: `/images/hair/${selectedOptions.hair || 1}.png`,
    mouths: `/images/mouths/${selectedOptions.mouths || 2}.png`,
    noses: `images/noses/${selectedOptions.noses || 1}.png`,
    eyebrows: `/images/eyebrows/${selectedOptions.eyebrows || 1}.png`,
    hats: `/images/accessories/hats/${selectedOptions.hats || 1}.png`,
    glasses: `/images/accessories/glasses/${selectedOptions.glasses || 1}.png`,
    layer_1: `/images/clothes/layer_1/${selectedOptions.layer_1 || 1}.png`,
    layer_2: `/images/clothes/layer_2/${selectedOptions.layer_2 || 1}.png`,
    layer_3: `/images/clothes/layer_3/${selectedOptions.layer_3 || 1}.png`,
  };

  return (
    <div className="container">
      <div className="avatar-preview">
        {Object.values(avatarImageUrls).map((url, index) => (
          <Avatar key={index} avatarImage={url} />
        ))}
      </div>
      <Sidebar categories={customizationCategories} />
    </div>
  );
}

export default App;
