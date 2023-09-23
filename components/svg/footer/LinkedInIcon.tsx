"use client";

import { usePathname } from "next/navigation";

const LinkedInIcon = () => {
  const pathName = usePathname();
  const isContactPage =
    pathName === "/contact" && "md:h-[1.875rem] md:w-[1.875rem]";

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isContactPage}`}
    >
      <g id="Social icon">
        <g id="Group">
          <path
            className="fill-black400 dark:fill-white800"
            id="Vector"
            d="M22.2975 1H2.69805C1.75918 1 1 1.74121 1 2.65762V22.3379C1 23.2543 1.75918 24 2.69805 24H22.2975C23.2363 24 24 23.2543 24 22.3424V2.65762C24 1.74121 23.2363 1 22.2975 1ZM7.82363 20.5994H4.40957V9.62051H7.82363V20.5994ZM6.1166 8.12461C5.02051 8.12461 4.13555 7.23965 4.13555 6.14805C4.13555 5.05645 5.02051 4.17148 6.1166 4.17148C7.2082 4.17148 8.09316 5.05645 8.09316 6.14805C8.09316 7.23516 7.2082 8.12461 6.1166 8.12461ZM20.5994 20.5994H17.1898V15.2627C17.1898 13.9914 17.1674 12.3518 15.4154 12.3518C13.641 12.3518 13.3715 13.7398 13.3715 15.1729V20.5994H9.96641V9.62051H13.2367V11.1209H13.2816C13.7354 10.2584 14.8494 9.34648 16.507 9.34648C19.9615 9.34648 20.5994 11.6195 20.5994 14.5754V20.5994Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LinkedInIcon;
