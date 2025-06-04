import { Home } from "iconoir-react";
import React from "react";

export const ContainerLanding = () => {
  return (
    <div className="ladCon bg-amber-50 fixed w-120 h-auto top-25 left-20 rounded-lg justify-between shadow-2xl">
      <div className="w-full">
        <Home className="home cursor-pointer hover:text-amber-900" />
      </div>
      <div className="w-full text-left h-full flex flex-col justify-around items-center gap-10">
        <h1 className="text-7xl font-bold">!Un café para ti!</h1>
        <p className="text-yellow-900 text-3xl font-light">
          Un café según el gusto de la persona
        </p>
        <button className="btn-info cursor-pointer text-yellow-50">MÁS INFORMACIÓN</button>
      </div>
    </div>
  );
};
