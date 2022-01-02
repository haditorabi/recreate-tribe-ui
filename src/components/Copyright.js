import React from "react";
export default function Copyright() {
  return (
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
        © Copyright 2022, Tribe Campfire
      </div>
    </div>
  );
}
