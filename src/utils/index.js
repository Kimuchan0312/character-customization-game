export const getOptionImageUrl = (category, optionIndex) => {
    if (category === "hats" || category === "glasses") {
      return `/images/accessories/${category}/${optionIndex}.png`;
    } else if (category.startsWith("layer")) {
      return `/images/clothes/${category}/${optionIndex}.png`;
    } else {
      return `/images/${category}/${optionIndex}.png`;
    }
  };

  
