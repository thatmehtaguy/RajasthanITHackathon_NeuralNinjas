import React from "react";

export const CategoriesTwo = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto py-4 md:py-6  mt-24">
      <div className="md:pt-3 lg:pt-0 3xl:pb-2 mb-12 sm:mb-14 md:mb-16 xl:mb-24 2xl:mb-16">
        <div className="-mt-1.5 mb-5 xl:mb-6 text-center pb-2 lg:pb-3 xl:pb-4 3xl:pb-7">
          <h1 className="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope 3xl:text-[25px] 3xl:leading-9">
            Choose the category of goods or services:
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {categories.map((category) => (
            <a
              key={category.label}
              className="group block w-full text-center shrink-0 mb-12"
              href="#"
            >
              <div className="flex max-w-[178px] max-h-[178px] mb-3.5 xl:mb-4 mx-auto rounded-full overflow-hidden bg-slate-200">
                <div className="flex shrink-0 transition-all duration-700 w-full h-full transform scale-50 group-hover:scale-100 -translate-x-full group-hover:translate-x-0">
                  <img
                    alt="Fresh Vegetables"
                    src={category.image}
                    width={178}
                    height={178}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover rounded-full aspect-square text-transparent"
                    loading="lazy"
                  />
                </div>
                <div className="flex shrink-0 transition-all duration-700 w-full h-full transform scale-100 group-hover:scale-50 -translate-x-full group-hover:translate-x-0">
                  <img
                    alt={category.label}
                    src={category.image}
                    width={178}
                    height={178}
                    decoding="async"
                    data-nimg={1}
                    className="object-cover rounded-full aspect-square text-transparent"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="capitalize text-brand-dark text-sm sm:text-15px lg:text-base truncate">
                {category.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// CategoriesTwo.displayName = "CategoriesTwo";

const categories = [
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fresh-vegetables.png",
    label: "Fresh Vegetables",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/diet-foods.png",
    label: "Diet Foods",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/diet-nutrition.png",
    label: "Diet Nutrition",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fast-food.png",
    label: "Fast Food Items",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fruits-items.png",
    label: "Fruits Items",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/healthy-foods.png",
    label: "Healthy Foods",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/grocery-items.png",
    label: "Grocery Items",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/quality-milk.png",
    label: "Quality Milk",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/cold-drinks.png",
    label: "Cold Drinks",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/beaf-steak.png",
    label: "Beaf Steak",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/vitamin-items.png",
    label: "Vitamin Items",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/raw-chicken.png",
    label: "Raw Chicken",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/breakfast-item.png",
    label: "Breakfast Item",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/fish-items.png",
    label: "Fish Items",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/green-vegetables.png",
    label: "Green Vegetables",
  },
  {
    image:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/category/cookies-biscuits.png",
    label: "Cookies & Biscuits",
  },
];

export default CategoriesTwo;