import React from "react";
export default function LeftSidebar() {
  return (
    <aside
      className="hidden lg:col-span-3 lg:block  xl:col-span-3 pt-5 sm:pt-7"
      aria-label="Sidebar"
    >
      <nav className="flex-1 space-y-8 isolate mb-5" aria-label="Sidebar">
        <div className="space-y-1" role="group">
          <a
            className="bg-main-200 text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            aria-current="page"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="text-basicMain-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="truncate">Home</span>
          </a>
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/members"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              focusable="false"
              className="text-basicMain-400 group-hover:text-basicMain-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="truncate">Members</span>
          </a>
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/spaces"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              focusable="false"
              className="text-basicMain-400 group-hover:text-basicMain-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <span className="truncate">Spaces</span>
          </a>
        </div>
      </nav>
      <nav className="flex-1 space-y-2 isolate mb-5">
        <div className="space-y-1" role="group">
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/collection/t5z4EViFP5w8"
          >
            <div className="items-center justify-center w-6 h-6 rounded-md mr-3 -ml-1 hover:bg-main-200">
              <a
                id="headlessui-disclosure-button-23"
                aria-expanded="true"
                href="/"
                aria-controls="headlessui-disclosure-panel-24"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 transform transition-transform"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <span className="truncate flex-grow font-semibold">
              Get Started
            </span>
          </a>
          <div id="headlessui-disclosure-panel-24">
            <div className="space-y-1" role="group">
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/start-here"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="About Campfire"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/EtZ7IaN8Avn5ZBCrNaNhD?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">About Campfire</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/say-hello"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Say Hello"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/xBdyZkFmFVXoUjXiyZZL3?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Say Hello</div>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-1" role="group">
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/collection/ZkMXQ9uRg9Oy"
          >
            <div className="items-center justify-center w-6 h-6 rounded-md mr-3 -ml-1 hover:bg-main-200">
              <a
                id="headlessui-disclosure-button-25"
                aria-expanded="true"
                href="/"
                aria-controls="headlessui-disclosure-panel-26"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 transform transition-transform"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <span className="truncate flex-grow font-semibold">Resources</span>
          </a>
          <div id="headlessui-disclosure-panel-26">
            <div className="space-y-1" role="group">
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/knowledge-base-2-0"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Knowledge Base"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/UvhJxDH7TzJLsQcRr6dFu?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Knowledge Base</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/community-success"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Community Insights"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/GfafDTG2FXD4Mp4aBYA5O?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Community Insights</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/tips-tricks"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Tips &amp; Tricks"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/qBtU65kQlGHJyftqJPaUj?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Tips &amp; Tricks</div>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-1" role="group">
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/collection/vvspgU9OM4nY"
          >
            <div className="items-center justify-center w-6 h-6 rounded-md mr-3 -ml-1 hover:bg-main-200">
              <a
                id="headlessui-disclosure-button-27"
                aria-expanded="true"
                href="/"
                aria-controls="headlessui-disclosure-panel-28"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 transform transition-transform"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <span className="truncate flex-grow font-semibold">Connect</span>
          </a>
          <div id="headlessui-disclosure-panel-28">
            <div className="space-y-1" role="group">
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/support-2-0"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Ask for Help"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/Dguz0rFnDHeQgdhlmHyxh?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Ask for Help</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/show-and-tell"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Show &amp; Tell"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/N1nII6BGrfItIfImdHlGx?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Show &amp; Tell</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/tribe-2-feedback"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Give Feedback"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/Ozgnf7bGhEr8MM2OxIFo0?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Give Feedback</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/devhub"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="DevHub"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/n8BazHlIiS7oqiqqlCwJX?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">DevHub</div>
              </a>
              <a
                className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
                href="/beta-feedback"
              >
                <div className="mr-3 -ml-1">
                  <div className="flex items-center justify-center h-6 w-6">
                    <img
                      alt="Beta Feedback"
                      className="text-basicSurface-400 group-hover:text-basicSurface-500 object-scale-down flex-shrink-0 rounded-md h-6 w-6"
                      aria-hidden="true"
                      src="https://tribe-s3-production.imgix.net/XvxrV1DEqiMwGTUG9vnaw?w=200&amp;h=200&amp;auto=compress,format&amp;dl"
                    />
                  </div>
                </div>
                <div className="truncate">Beta Feedback</div>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-1" role="group">
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/collection/XBtKQ1XJrGXG"
          >
            <div className="items-center justify-center w-6 h-6 rounded-md mr-3 -ml-1 hover:bg-main-200">
              <a
                id="headlessui-disclosure-button-29"
                aria-expanded="false"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 transform transition-transform -rotate-90"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <span className="truncate flex-grow font-semibold">
              Announcements
            </span>
          </a>
        </div>
        <div className="space-y-1" role="group">
          <a
            className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
            href="/collection/SbAMziPF1dk3"
          >
            <div className="items-center justify-center w-6 h-6 rounded-md mr-3 -ml-1 hover:bg-main-200">
              <a
                id="headlessui-disclosure-button-31"
                aria-expanded="false"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 transform transition-transform -rotate-90"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <span className="truncate flex-grow font-semibold">Tribe 1.0</span>
          </a>
        </div>
      </nav>
      <div className="flex flex-col space-y-3 mt-8 px-3">
        <div className="flex space-x-2">
          <a
            className="cursor-pointer transition duration-100 ease-in-out text-basicMain-600 hover:text-actionAccentHover-500 text-xs"
            rel="noopener noreferrer"
            href="https://tribe.so/terms-of-service"
          >
            Terms of Service
          </a>
          <a
            className="cursor-pointer transition duration-100 ease-in-out text-basicMain-600 hover:text-actionAccentHover-500 text-xs"
            rel="noopener noreferrer"
            href="https://tribe.so/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
        <div className="text-xs text-basicMain-600" aria-label="Copyright">
          © Copyright 2021,Tribe Campfire
        </div>
      </div>
    </aside>
  );
}
