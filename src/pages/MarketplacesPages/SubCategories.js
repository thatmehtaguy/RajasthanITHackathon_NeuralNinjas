import React from "react";
import capci from "./capci.png";

export const SubCategories = () => {
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

// SubCategories.displayName = "SubCategories";

const categories = [
  {
    image:
      '//cdn.shopify.com/s/files/1/0920/8638/files/bottlegourd_160x160.png?v=1639555217',
    label: "Fresh Vegetables",
  },
  {
    image:
    "//cdn.shopify.com/s/files/1/0920/8638/files/oktra_160x160.png?v=1639558555",
    label: "Diet Foods",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/watermelon_160x154.png?v=1639559112",
    label: "Diet Nutrition",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/products/green_magic-removebg-preview_459x544.png?v=1607007589 1x",
    label: "Fast Food Items",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/broccoli_160x155.png?v=1639558868",
    label: "Fruits Items",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/cabbage_160x160.png?v=1639554215",
    label: "Healthy Foods",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/papaya_a1931089-e035-4718-9de6-7c41515c3af2_160x155.png?v=1639559430",
    label: "Grocery Items",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/hotpeppr_157x160.png?v=1639554857",
    label: "Quality Milk",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/tomato_160x157.png?v=1639554573",
    label: "Cold Drinks",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/hotpeppr_157x160.png?v=1639554857",
    label: "Beaf Steak",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/capsicum_160x160.png?v=1639557615",
    label: "Vitamin Items",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/marigold_160x160.png?v=1639559775",
    label: "Raw Chicken",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/muskmelon_160x155.png?v=1639559270-item.png",
    label: "Breakfast Item",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/onion_160x160.png?v=1639557217",
    label: "Fish Items",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/Ridgegourd_160x160.png?v=1639557384",
    label: "Green Vegetables",
  },
  {
    image:
      "//cdn.shopify.com/s/files/1/0920/8638/files/tomato_160x157.png?v=1639554573",
    label: "Cookies & Biscuits",
  },
];

  

export default SubCategories;