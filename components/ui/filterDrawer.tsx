"use client";
import React from "react";
import { Button } from "./button";
import { Settings2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FilterSection } from "./filterSection";
type Props = {};

const filterDrawer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openSortFilter, setOpenSortFilter] = useState(false);
  const [openColorFilter, setOpenColorFilter] = useState(false);
  const [openSizeFilter, setOpenSizeFilter] = useState(false);
  const [openProductTypeFilter, setOpenProductTypeFilter] = useState(false);
  const [openBrandFilter, setOpenBrandFilter] = useState(false);
  const sortList = [
    {
      name: "Price (Low - High)",
      link: "",
    },
    {
      name: "Newest",
      link: "",
    },
    {
      name: "Top Sellers",
      link: "",
    },
    {
      name: "Price (High - Low)",
      link: "",
    },
  ];
  const colorList = ["Black", "Brown", "Tan"];
  const sizeList = ["40", "41", "42", "43", "44", "45", "46"];
  const productTypeList = ["Oxford", "Brogue", "Slippers"];
  const brandList = ["Alan Martin", "Travis Fremont"];
  return (
    <div className="relative">
      <div className="p-4 flex justify-end ">
        <Button
          variant={"outline"}
          className="ml-2"
          onClick={() => setOpen(true)}
        >
          Filter & Sort {<Settings2 />}
        </Button>
      </div>
      {open && (
        <div>
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-50"
            onClick={() => setOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-1000 z-50 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Filter & Sort</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="py-4 px-2 space-y-6 border-b border-gray-300">
              {/* Sort By */}
              <div
                className="font-medium flex items-center justify-between cursor-pointer pb-2"
                onClick={() => setOpenSortFilter(!openSortFilter)}
              >
                Sort By
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSortFilter ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {openSortFilter && (
                <ul className="mt-2 space-y-1">
                  {sortList.map((list) => (
                    <li
                      className="p-2 hover:bg-gray-100 rounded-md"
                      key={list.name}
                    >
                      <Link href={list.link}>{list.name}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Color Filter */}
              <FilterSection
                title="Color"
                open={openColorFilter}
                onToggle={() => setOpenColorFilter(!openColorFilter)}
                items={colorList}
              />

              {/* Size Filter */}
              <FilterSection
                title="Size"
                open={openSizeFilter}
                onToggle={() => setOpenSizeFilter(!openSizeFilter)}
                items={sizeList}
                grid
              />

              {/* Product Type Filter */}
              <FilterSection
                title="Product Type"
                open={openProductTypeFilter}
                onToggle={() =>
                  setOpenProductTypeFilter(!openProductTypeFilter)
                }
                items={productTypeList}
              />

              {/* Brand Filter */}
              <FilterSection
                title="Brand"
                open={openBrandFilter}
                onToggle={() => setOpenBrandFilter(!openBrandFilter)}
                items={brandList}
              />
            </div>

            <div className="absolute bottom-0 w-full p-4 border-t">
              <button className="w-full bg-black text-white py-2 rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default filterDrawer;
