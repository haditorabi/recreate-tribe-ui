import React from "react";
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
                tabindex="0"
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
                tabindex="-1"
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
                tabindex="-1"
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
                  tabindex="0"
                >
                  <div className="grid grid-cols-1 gap-1 -ml-2 -mr-2">
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/5b881b2a90ecbe6751123d7e"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        1
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/HEHU80kJxIRbjahSDgxK2?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Eli "
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Eli{" "}
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/2w0cqhJurN"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        2
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/mAa3XLSYNO6csmfdkiWCc?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Alexa Kempton"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Alexa Kempton
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/9FWKl7YerU"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        3
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/Az0oAq9gWidQEKZp2B4Hb?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Siavash"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Siavash
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/6005d798d50aaa6bfaf76024"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        4
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/MgYBhYzuOx0iHRznrLcPF?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Sid Says"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Sid Says
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/6L2yq94wh6"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        5
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/hs4MpdLAFi8kaV3nXCGxj?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="CJ Verma"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          CJ Verma
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/11byJ5RJPO"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        6
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/UYbF6YrFIj46Gml2ge9GN?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="shanny"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          shanny
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/OFNwuYKhMf"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        7
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/ySprGdzl0kBuAzk3YWx6R?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Mo Malayeri"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Mo Malayeri
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/o0eKectvvg"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        8
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/2dfy6b6y8f3Ivoydpnjad?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Flip"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Flip
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/sWbVLZH7gB"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        9
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/slAa8NUYlOVsswgERNJlb?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Javier Alaves"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Javier Alaves
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      className="hover-trigger flex space-x-3 items-center p-2 rounded-md hover:bg-surface-100"
                      href="/member/ARuxOM3VMU"
                    >
                      <span className="text-lg font-medium w-5 text-center flex-shrink-0 whitespace-nowrap">
                        10
                      </span>
                      <span className="inline-block relative flex-shrink-0">
                        <img
                          className="bg-surface-50 inline-block object-cover object-center rounded-full h-10 w-10"
                          src="https://tribe-s3-production.imgix.net/PMYR2jc4vs8l8IEs2FV0O?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                          alt="Ari Diamond"
                        />
                      </span>
                      <div className="flex-grow max-w-full overflow-hidden">
                        <div className="truncate text-basicSurface-900">
                          Ari Diamond
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
