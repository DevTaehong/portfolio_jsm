"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const FramerMotionIcon = ({
  isCaseDetailPage,
}: {
  isCaseDetailPage?: boolean;
}) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="Framer motion"
    >
      <svg
        className={`${
          isCaseDetailPage
            ? "h-[3.18744rem] w-[3.18744rem] sm:h-[5.82625rem] sm:w-[5.82625rem]"
            : "h-[3.29831rem] w-[3.29831rem] sm:h-[6.25rem] sm:w-[6.25rem]"
        } ${isCircleHovered && "drop-shadow-skill"}`}
        viewBox="0 0 55 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={handleCircleHover}
        onMouseLeave={handleCircleLeave}
      >
        <circle
          cx="26.8863"
          cy="26.3863"
          r="26.3863"
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
        />
        <g clipPath="url(#clip0_3357_3953)">
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#59529D]"
                : "fill-[#778295]"
            }`}
            d="M40.6071 13.7384V26.9316L27.414 40.1247L20.8174 33.5281L27.414 26.9316L40.6071 13.7384Z"
          />
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#5271B4]"
                : "fill-[#778295]"
            }`}
            d="M40.6071 26.9315V40.1247L34.0105 33.5281L40.6071 26.9315Z"
          />
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#BB4B96]"
                : "fill-[#778295]"
            }`}
            d="M27.414 26.9316L14.2208 40.1247V13.7384L27.414 26.9316Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3953">
            <rect
              width="26.3863"
              height="26.3863"
              fill="white"
              transform="translate(14.2208 13.7384)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default FramerMotionIcon;
