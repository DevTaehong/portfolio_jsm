const FrontEndIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M21.7993 13.3005C21.8403 13.1098 21.8247 12.9113 21.7544 12.7293C21.684 12.5474 21.562 12.39 21.4033 12.2765L7.40327 2.27654C7.24573 2.16326 7.05861 2.09831 6.86476 2.08962C6.67092 2.08094 6.47874 2.12889 6.3117 2.22763C6.14466 2.32637 6.00999 2.47162 5.92414 2.64564C5.83829 2.81965 5.80498 3.01491 5.82827 3.20754L7.82827 20.2075C7.85129 20.4024 7.93115 20.5863 8.05789 20.7361C8.18464 20.8859 8.35267 20.9951 8.54105 21.0501C8.72943 21.1052 8.92984 21.1035 9.1173 21.0455C9.30476 20.9874 9.47098 20.8754 9.59527 20.7235L13.2073 16.3075L16.5843 21.7675L18.2853 20.7155L14.9283 15.2875L21.0173 14.0695C21.2086 14.0321 21.3848 13.9392 21.5238 13.8025C21.6628 13.6658 21.7586 13.4912 21.7993 13.3005Z"
      className={`${
        isHovered ? "fill-primaryLight dark:fill-primaryDark" : "fill-white900"
      }`}
    />
  </svg>
);

export default FrontEndIcon;
