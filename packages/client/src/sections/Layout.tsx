import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="lg:ml-64 mt-16">
        <main className="min-h-[calc(100vh-64px)] p-4">
          <Suspense
            fallback={
              <div className="w-full min-h-[calc(100vh-72px)] flex justify-center items-center">
                <div className="border-8 border-solid border-t-neutral-800 border-r-neutral-600 border-b-neutral-400 border-l-neutral-200 rounded-full w-20 h-20 animate-spin"></div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
