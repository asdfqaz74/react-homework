import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center bg-[#FFE650] h-screen">
      <h1 className="sr-only">팝콘톡 시작</h1>
      <div className="-mt-10 animate-jump-in animate-duration-700 animate-ease-out animate-normal h-[60vh]">
        <img
          src="/images/logo.png"
          className="max-w-full max-h-full"
          alt="팝콘톡"
        />
      </div>
    </div>
  );
}

export default Intro;
