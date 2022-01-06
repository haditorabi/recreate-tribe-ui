import React from "react";
import SamplePost from "./SamplePost";
export default function MainContent() {
  return (
    <main className="col-span-12 lg:col-span-6 xl:col-span-6 overflow-y-auto h-screen no-scrollbar">
      <div className="pull-to-refresh-content-wrapper">
        <div className="pull-to-refresh-content pull-to-refresh-down pull-to-refresh-transition">
          <div>
            <div className="pt-5 sm:pt-7">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-12">
                  <div>
                    <div className="grid grid-cols-1 gap-5">
                      <SamplePost />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
