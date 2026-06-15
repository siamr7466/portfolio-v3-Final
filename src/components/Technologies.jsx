import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaDartLang } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiWordpressFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="mb-20 mt-10 text-center text-4xl md:text-5xl">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-[#F7DF1E]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFlutterFill className="text-7xl text-[rgb(66,165,245)]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDartLang className="text-7xl text-[#0160a8]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-[#06b6d4]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiWordpressFill className="text-7xl text-[#00749C]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
