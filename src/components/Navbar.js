import React from "react";
export default function Navbar() {
  return (
    <div className="bg-actionSecondary-50 text-basicSecondary-500 shadow-sm lg:overflow-y-visible">
      <div className="max-w-8xl mx-auto px-3 lg:px-8">
        <div className="grid grid-cols-12 h-16 gap-5">
          <div className="flex overflow-hidden items-center lg:col-span-3 col-span-5">
            <a className="lg:hidden mr-3" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </a>
            <a href="/">
              <div style={{ maxWidth: "300px" }} className="max-h-8 block">
                <img
                  className="object-contain h-8 max-h-full max-w-full"
                  src="https://tribe.so/webflow-v2/images/TribeLogo.svg"
                  alt="Tribe.so"
                />
              </div>
            </a>
          </div>
          <div className="hidden lg:flex flex-grow lg:col-span-6 space-x-4">
            <div className="flex items-center flex-1">
              <div className="relative isolate w-full relative">
                <div>
                  <div
                    aria-haspopup="listbox"
                    aria-owns="downshift-149-menu"
                    aria-expanded="false"
                  >
                    <div className="flex relative rounded-md shadow-sm isolate w-full">
                      <div className="flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            className="h-5 w-5 text-basicSecondary-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="block w-full rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-1 text-basicSecondary-500 bg-actionSecondary-50 placeholder-basicSecondary-300 focus:ring-actionSecondary-600 focus:border-actionSecondary-600 border border-neutral-300 pl-10"
                          id="downshift-149-input"
                          aria-autocomplete="list"
                          aria-controls="downshift-149-menu"
                          aria-labelledby="downshift-149-label"
                          autoComplete="off"
                          value=""
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 lg:col-span-3 col-span-7 justify-end">
            <button
              type="button"
              className="inline-flex items-center relative focus:outline-none focus-visible:ring text-basicSecondary-500 border border-neutral-300 bg-actionSecondary-50 hover:bg-actionSecondary-100 font-medium shadow-sm px-2 py-2 text-sm rounded-full  lg:hidden w-10 h-10 px-0 justify-center flex-shrink-0"
            >
              <span className="flex">
                <span className="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="relative inline-block text-left">
                <span>
                  <button
                    className="rounded-full flex text-basicSecondary-400 hover:text-basicSecondary-600 focus:outline-none focus-visible:ring w-10 h-10 items-center justify-center"
                    id="headlessui-menu-button-1"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="relative inline-block">
                      <div className="inline-flex items-center relative focus:outline-none focus-visible:ring text-basicSecondary-500 border border-neutral-300 bg-actionSecondary-50 hover:bg-actionSecondary-100 font-medium shadow-sm px-2 py-2 text-sm rounded-full  w-10 h-10 px-0 justify-center">
                        <span className="flex">
                          <span className="inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 h-5 w-5"
                              focusable="false"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <span className="absolute top-0 right-0 transform translate-x-1/2 text-danger-100 bg-danger-600 rounded-full h-5 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none translate-y-0">
                        1
                      </span>
                    </div>
                  </button>
                </span>
              </div>
              <div className="relative inline-block text-left">
                <button
                  className="rounded-full flex items-center text-basicSecondary-400 hover:text-basicSecondary-600 focus:outline-none focus-visible:ring"
                  id="headlessui-menu-button-2"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Show Profile</span>
                  <span className="inline-flex relative items-center justify-center flex-shrink-0 bg-surface-200 rounded-full h-10 w-10 h-8 w-8 rounded-full">
                    <span className="text-md font-medium leading-none text-basicSurface-500">
                      HT
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
