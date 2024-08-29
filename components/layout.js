import React from "react";

export default function Layout({ children }) {
  return (
    <main className="min-h-[100vh] bg-slate-900 flex items-center justify-center">
      {children}
    </main>
  );
}
