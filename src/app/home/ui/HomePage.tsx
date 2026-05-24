"use client";

import { useState } from "react";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">

  {/* Sidebar */}
  {sidebarOpen && (
    <aside className="w-fit bg-zinc-900 text-white p-4 px-8">
      Sidebar
    </aside>
  )}

  {/* Main */}
  <main className="flex-1 flex flex-col">

    {/* Navbar */}
    <nav className="h-fit bg-zinc-800 text-white flex flex-row gap-4 items-center px-4 py-6">
      
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      <h1 className="ml-4">Dashboard</h1>
    </nav>

    {/* Content */}
    <section className="flex-1 bg-zinc-100 p-6">
      Content
    </section>

  </main>
</div>
  );
};

export default HomePage;
