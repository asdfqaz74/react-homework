import React from "react";
import HeaderNav from "./components/header/headerNav";
import BoardNav from "./components/Header/BoardNav";
import HomeNav from "./components/HomeNav/HomeNav";
import homeNavData from "./data/homeNavData";

export default function Container() {
  return (
    <div>
      <HeaderNav />
      <BoardNav />

      <HomeNav data={homeNavData} />
    </div>
  );
}
