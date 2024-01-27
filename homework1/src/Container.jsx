import React from "react";
import { HeaderNav, BoardNav } from "./components/header";
import HomeNav from "./components/homeNav/HomeNav";
import FigureStory from "./components/figureStory/FigureStory";
import AdSwiper from "./components/adSwiper/AdSwiper";
import { boardNavData, homeNavData, figureStoryData } from "./data";

export default function Container() {
  return (
    <div>
      <HeaderNav />
      <AdSwiper />
      <BoardNav data={boardNavData} />
      <div className="font-pretendard text-sm px-3 mx-auto mt-3 mb-[3.75rem]">
        <section className="grid grid-cols-1 xs:flex xs:flex-wrap sm:grid sm:grid-cols-2 place-items-center justify-around">
          <h2 className="sr-only">선배님 스토리 칼럼</h2>
          <FigureStory data={figureStoryData} number={0} />
          <FigureStory data={figureStoryData} number={1} />
          <FigureStory data={figureStoryData} number={2} />
          <FigureStory data={figureStoryData} number={3} />
        </section>
      </div>

      <HomeNav data={homeNavData} />
    </div>
  );
}
