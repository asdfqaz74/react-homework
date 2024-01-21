import React from "react";
import icons from "../../assets/svg/icons";

export default function HomeNav(props) {
  const { text } = props.data;
  return (
    <nav className="fixed h-[3.75rem] border-t border-t-Contents-contentSecondary bottom-0 w-full px-3 pt-2 pb-2 bg-background">
      <div className="flex justify-around text-sm font-normal">
        <div className="flex-col text-center">
          <a href="/">
            {React.cloneElement(icons.home, {
              className: "mx-auto mb-1",
            })}
            <span>{text[0]}</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/">
            {React.cloneElement(icons.life, {
              className: "mx-auto mb-1",
            })}
            <span>{text[1]}</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/">
            {React.cloneElement(icons.map, {
              className: "mx-auto mb-1",
            })}
            <span>{text[2]}</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/">
            {React.cloneElement(icons.chat, {
              className: "mx-auto mb-1",
            })}
            <span>{text[3]}</span>
          </a>
        </div>
        <div className="flex-col items-center justify-center">
          <a href="/">
            {React.cloneElement(icons.profile, {
              className: "mx-auto mb-1",
            })}
            <span>{text[4]}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
