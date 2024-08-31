import React from "react";

export default function Action({ description }) {
  console.log(description);
  return (
    <>
      <div className="w-60 h-36 bg-sky-700 rounded-lg p-3">
        <span className="text-slate-200">{description}</span>
      </div>
    </>
  );
}
