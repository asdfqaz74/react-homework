import React from "react";

export default function FigureStory(props) {
  const { data, number } = props;
  const { imageSrc, alt, contents, team, name } = data;
  return (
    <figure className="w-[60%] xs:w-[40%] sm:w-[50%] md:w-[50%] xs:min-w-[8.75rem] xs:max-w-[13rem] sm:max-w-[12.5rem] bg-Contents-contentSecondary rounded-3xl h-[6.5rem] md:h-[8rem] mb-20">
      <img
        src={imageSrc[number]}
        alt={alt[number]}
        className="w-full h-full object-cover rounded-3xl"
      />
      <figcaption className="py-1">
        {contents[number]}
        <div className="text-Contents-contentSecondary">
          <span className="border-r pr-1">{team}</span>
          <span className="pl-1">{name[number]}</span>
        </div>
      </figcaption>
    </figure>
  );
}
