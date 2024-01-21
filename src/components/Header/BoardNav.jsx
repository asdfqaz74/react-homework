import React from "react";

export function BoardNav(props) {
  const { data } = props;
  return (
    <nav class="sticky top-[2.8125rem]">
      <ul class="flex gap-1 p-2 text-base font-semibold leading-4 top-11 bg-primary text-Contents-contentTertiary">
        <li class="text-background mx-auto">
          <a href="/">{data.title[0]}</a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            {data.title[1]}
          </a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            {data.title[2]}
          </a>
        </li>
        <li class="mx-auto">
          <a class="" href="/">
            {data.title[3]}
          </a>
        </li>
      </ul>
    </nav>
  );
}
