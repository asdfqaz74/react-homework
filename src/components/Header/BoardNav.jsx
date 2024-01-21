import React from "react";

export default function BoardNav() {
  return (
    <nav class="sticky top-[2.8125rem]">
      <ul class="flex gap-1 p-2 text-base font-semibold leading-4 top-11 bg-primary text-Contents-contentTertiary">
        <li class="text-background mx-auto">
          <a href="/">선배님 스토리</a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            기기 거래
          </a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            질의 응답
          </a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            같이 해요
          </a>
        </li>
      </ul>
    </nav>
  );
}
