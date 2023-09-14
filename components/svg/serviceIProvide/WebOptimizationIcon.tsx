const WebOptimizationIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-[1.87519rem]"
    viewBox="0 0 31 25"
    fill="none"
  >
    <path
      d="M12.9963 17.3406C13.5963 17.9406 14.3713 18.2346 15.3213 18.2226C16.2713 18.2106 16.9713 17.8666 17.4213 17.1906L25.8213 4.59058L13.2213 12.9906C12.5463 13.4406 12.1903 14.1281 12.1533 15.0531C12.1163 15.9781 12.3973 16.7406 12.9963 17.3406ZM15.3213 0.0905781C16.7963 0.0905781 18.2153 0.297078 19.5783 0.710078C20.9413 1.12308 22.2223 1.74158 23.4213 2.56558L20.5713 4.36558C19.7463 3.94058 18.8903 3.62208 18.0033 3.41008C17.1163 3.19808 16.2223 3.09158 15.3213 3.09058C11.9963 3.09058 9.16479 4.25908 6.82679 6.59608C4.48879 8.93308 3.32029 11.7646 3.32129 15.0906C3.32129 16.1406 3.46529 17.1781 3.75329 18.2031C4.04129 19.2281 4.44729 20.1906 4.97129 21.0906H25.6713C26.2463 20.1406 26.6653 19.1531 26.9283 18.1281C27.1913 17.1031 27.3223 16.0406 27.3213 14.9406C27.3213 14.0406 27.2148 13.1656 27.0018 12.3156C26.7888 11.4656 26.4703 10.6406 26.0463 9.84058L27.8463 6.99058C28.5963 8.16558 29.1903 9.41558 29.6283 10.7406C30.0663 12.0656 30.2973 13.4406 30.3213 14.8656C30.3463 16.2906 30.1838 17.6531 29.8338 18.9531C29.4838 20.2531 28.9713 21.4906 28.2963 22.6656C28.0213 23.1156 27.6463 23.4656 27.1713 23.7156C26.6963 23.9656 26.1963 24.0906 25.6713 24.0906H4.97129C4.44629 24.0906 3.94629 23.9656 3.47129 23.7156C2.99629 23.4656 2.62129 23.1156 2.34629 22.6656C1.69629 21.5406 1.19629 20.3466 0.846289 19.0836C0.496289 17.8206 0.321289 16.4896 0.321289 15.0906C0.321289 13.0156 0.715289 11.0716 1.50329 9.25858C2.29129 7.44558 3.36629 5.85858 4.72829 4.49758C6.09029 3.13458 7.68329 2.05908 9.50729 1.27108C11.3313 0.483078 13.2693 0.0895781 15.3213 0.0905781Z"
      className={`${
        isHovered ? "fill-primaryLight dark:fill-primaryDark" : "fill-white900"
      }`}
    />
  </svg>
);

export default WebOptimizationIcon;
