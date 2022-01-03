import React from "react";
import Copyright from "./Copyright";

export default function Leadeboard() {
  return (
    <div className="hidden lg:block lg:col-span-4 sticky top-0">
      <div className="mb-5">
        <div className="bg-surface-50 text-basicSurface-500 shadow flex flex-col justify-between isolate sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6  pb-0 sm:pb-0">
            <h3 className="text-basicSurface-900">Leaderboard</h3>
          </div>
          <div className="flex-1 px-4 py-5 sm:p-6">
            <div
              className="overflow-x-auto isolate relative space-x-4 flex flex-nowrap"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="horizontal"
            >
              <button
                className="flex-1 bg-surface-200 text-basicSurface-700 rounded-md px-2 py-1.5 text-sm leading-4 focus:outline-none focus-visible:ring focus-visible:ring-inset focus:z-10"
                name="allTime"
                id="headlessui-tabs-tab-35"
                role="tab"
                type="button"
                aria-selected="true"
                allowFullScreentabIndex="0"
                aria-controls="headlessui-tabs-panel-38"
              >
                All time
              </button>
              <button
                className="flex-1 text-basicSurface-500 hover:text-basicSurface-700 rounded-md px-2 py-1.5 text-sm leading-4 focus:outline-none focus-visible:ring focus-visible:ring-inset focus:z-10"
                name="lastThirtyDays"
                id="headlessui-tabs-tab-36"
                role="tab"
                type="button"
                aria-selected="false"
                allowFullScreentabIndex="-1"
              >
                Month
              </button>
              <button
                className="flex-1 text-basicSurface-500 hover:text-basicSurface-700 rounded-md px-2 py-1.5 text-sm leading-4 focus:outline-none focus-visible:ring focus-visible:ring-inset focus:z-10"
                name="lastSevenDays"
                id="headlessui-tabs-tab-37"
                role="tab"
                type="button"
                aria-selected="false"
                allowFullScreentabIndex="-1"
              >
                Week
              </button>
            </div>
            <div className="mt-4">
              <div>
                <div
                  className="focus:outline-none focus-visible:ring"
                  id="headlessui-tabs-panel-38"
                  role="tabpanel"
                  aria-labelledby="headlessui-tabs-tab-35"
                  allowFullScreentabIndex="0"
                >
                  <div className="grid grid-cols-1 gap-1 -ml-2 -mr-2">
                    {[...Array(3)].map((x, index) => (
                      <a
                        key={index}
                        className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                        href="/member/5b881b2a90ecbe6751123d7e"
                      >
                        <span className="inline-block relative flex-shrink-0">
                          <img
                            className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                            src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                            alt="Eli "
                          />
                        </span>
                        <div className="flex-grow w-100 overflow-hidden">
                          <div className="truncate text-basicSurface-900">
                            User 4{" "}
                            <span className="text-md font-light w-5 ml-2 text-center text-basicSurface-500">
                              120 <small>Pts</small>
                            </span>
                          </div>
                        </div>
                        <div>
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="hover-target mr-2 w-5 h-5 text-basicSurface-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    ))}
                    <a
                      className="cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500 inline-block"
                      href="/"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
