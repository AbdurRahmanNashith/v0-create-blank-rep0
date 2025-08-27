import React from "react";

type Props = {
  name: string;
  imageLink: string;
  link: string;
};

const CategoryCardItem = (props: Props) => {
  return (
    <div className="flex-shrink-0 w-40 sm:w-48 relative group overflow-hidden h-40">
      <a href={props.link}>
        <div className="absolute bottom-0 left-0 w-full transform transition-transform duration-300 ease-out group-hover:-translate-y-4">
          <div className="aspect-[4/3]">
            <img
              src={props.imageLink}
              alt={props.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2 underline text-center bg-white">
            {props.name.toUpperCase()}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CategoryCardItem;
