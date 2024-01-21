import React from "react";
import icons from "../../assets/svg/icons";

export function HeaderNav() {
  return (
    <header className="sticky top-0 bg-background h-[2.8125rem] z-10">
      <div className="flex justify-between w-full px-5 py-2">
        <div className="flex flex-shrink-0 select-wrapper">
          <select className="w-32 text-lg font-semibold appearance-none font-pretendard">
            <option value="">남가좌제2동</option>
            <option value="">호원2동</option>
          </select>
          <div className="w-4 h-4 translate-y-1 pointer-events-none -translate-x-6">
            {icons.direction}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href="/" className="flex-shrink-0">
            <div className="w-[1.625rem] h-[1.625rem]">{icons.search}</div>
          </a>
          <a href="/" className="flex-shrink-0">
            {icons.hamburger}
          </a>
          <a href="/" className="flex-shrink-0">
            {React.cloneElement(icons.bell, {
              className: "w-[1.25rem] h-[1.25rem]",
            })}
          </a>
        </div>
      </div>
    </header>
  );
}
