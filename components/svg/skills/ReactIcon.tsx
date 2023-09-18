"use client";

import { useHover } from "@/utils/useHover";
import { Tooltip } from "@nextui-org/react";

const ReactIcon = ({ isCaseDetailPage }: { isCaseDetailPage?: boolean }) => {
  const { isCircleHovered, handleCircleHover, handleCircleLeave } = useHover();
  return (
    <Tooltip
      classNames={{
        base: "text-white500 dark:text-white900 dark:bg-black300",
      }}
      content="React.js"
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
          className={`fill-[#F3F8FF] dark:fill-black300 ${
            isCircleHovered && "fill-white900"
          }`}
          cx="26.7047"
          cy="26.3863"
          r="26.3863"
        />
        <g clipPath="url(#clip0_3357_3908)">
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#53C1DE]"
                : "fill-[#778295]"
            }`}
            d="M29.8972 26.4796C29.8972 25.2694 28.8853 24.2881 27.6369 24.2881C26.3887 24.2881 25.3766 25.2694 25.3766 26.4796C25.3766 27.6901 26.3887 28.6713 27.6369 28.6713C28.8853 28.6713 29.8972 27.6901 29.8972 26.4796Z"
          />
          <path
            className={`${
              isCircleHovered || isCaseDetailPage
                ? "fill-[#53C1DE]"
                : "fill-[#778295]"
            }`}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.7074 22.0052C36.2222 19.8681 36.8694 15.9049 34.5879 14.5612C32.317 13.2234 29.3619 15.7869 27.8015 17.3256C26.2456 15.8022 23.2074 13.2497 20.9278 14.5977C18.6578 15.9399 19.3579 19.8374 19.8842 21.988C17.7666 22.6023 14.1367 23.9255 14.1367 26.629C14.1367 29.3248 17.7629 30.7644 19.8678 31.3781C19.3396 33.5406 18.6746 37.3824 20.9475 38.7217C23.2357 40.0694 26.2643 37.5776 27.8392 36.0221C29.4097 37.5698 32.3364 40.0779 34.6078 38.7348C36.8862 37.3876 36.2928 33.4775 35.7665 31.3145C37.807 30.6994 41.4409 29.2911 41.4409 26.629C41.4409 23.9515 37.7915 22.6176 35.7074 22.0052ZM35.4487 30.1682C35.1031 29.0507 34.6367 27.8624 34.0661 26.6349C34.6108 25.4364 35.0591 24.2634 35.395 23.1532C36.9229 23.6056 40.2746 24.6398 40.2746 26.629C40.2746 28.6369 37.0582 29.6808 35.4487 30.1682ZM34.0233 37.7037C32.3286 38.7057 29.8112 36.3072 28.6514 35.1675C29.4209 34.3079 30.1898 33.3086 30.9402 32.1989C32.2602 32.0793 33.5072 31.8837 34.6382 31.6167C35.0086 33.1467 35.7254 36.6972 34.0233 37.7037ZM21.5303 37.6894C19.8355 36.6912 20.6102 33.2629 20.9988 31.67C22.1171 31.9227 23.3552 32.1045 24.6783 32.2141C25.4336 33.2999 26.2248 34.298 27.0221 35.1721C26.0371 36.1454 23.2331 38.6923 21.5303 37.6894ZM15.3031 26.629C15.3031 24.6136 18.6347 23.587 20.1974 23.1356C20.5391 24.2708 20.9873 25.4578 21.5282 26.658C20.9803 27.8761 20.5257 29.0819 20.1808 30.2305C18.6908 29.7948 15.3031 28.6456 15.3031 26.629ZM21.5122 15.6288C23.214 14.6226 25.8545 17.0731 26.9842 18.176C26.191 19.0461 25.4071 20.0366 24.6582 21.1162C23.3741 21.2378 22.1448 21.433 21.0147 21.6946C20.5907 19.96 19.8123 16.6339 21.5122 15.6288ZM31.7746 22.4112C32.6458 22.5235 33.4805 22.6729 34.2642 22.8556C34.0289 23.626 33.7357 24.4315 33.3903 25.2573C32.8896 24.2869 32.3522 23.336 31.7746 22.4112ZM27.8018 19.0275C28.3398 19.6228 28.8786 20.2876 29.4087 21.0088C28.3335 20.9568 27.2566 20.9567 26.1815 21.008C26.712 20.2935 27.2555 19.6297 27.8018 19.0275ZM22.1974 25.2564C21.8577 24.4335 21.5671 23.6244 21.3298 22.8431C22.1088 22.665 22.9396 22.5195 23.8051 22.409C23.2259 23.3318 22.6894 24.2823 22.1974 25.2564ZM23.83 30.934C22.9359 30.8321 22.0925 30.6939 21.3137 30.5207C21.5548 29.7257 21.8518 28.8991 22.1987 28.0585C22.6975 29.0428 23.2422 30.0025 23.83 30.934ZM27.8341 34.3147C27.2813 33.7053 26.7299 33.0314 26.1913 32.3065C27.2726 32.3498 28.3559 32.3499 29.4371 32.3006C28.9054 33.0387 28.3685 33.7137 27.8341 34.3147ZM33.4014 28.0157C33.7663 28.8655 34.074 29.6875 34.3183 30.4691C33.5266 30.6537 32.6719 30.8023 31.7713 30.9127C32.3532 29.9703 32.8992 29.0047 33.4014 28.0157ZM30.2892 31.0571C28.6353 31.1778 26.9711 31.1765 25.3167 31.067C24.3766 29.6643 23.5397 28.1891 22.8174 26.6576C23.5363 25.1293 24.367 23.657 25.3027 22.2566C26.9583 22.1287 28.6241 22.1284 30.2798 22.2573C31.2074 23.6577 32.0369 25.1262 32.7725 26.6407C32.0456 28.1682 31.2105 29.6435 30.2892 31.0571ZM34.0053 15.5934C35.7076 16.5963 34.9499 20.1581 34.578 21.7069C33.4452 21.4399 32.2151 21.2412 30.9272 21.1177C30.1769 20.0265 29.3996 19.0343 28.6192 18.1754C29.7634 17.0487 32.3196 14.6003 34.0053 15.5934Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_3908">
            <rect
              width="27"
              height="27"
              fill="white"
              transform="translate(14.1367 13)"
            />
          </clipPath>
        </defs>
      </svg>
    </Tooltip>
  );
};

export default ReactIcon;
