import React from 'react'

const Cloudy = ({ width = 211, height = 156 }: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 211 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_105_447)">
        <ellipse cx="128.5" cy="78" rx="82.5" ry="78" fill="url(#paint0_linear_105_447)" />
      </g>
      <g filter="url(#filter1_bi_105_447)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.093 154.571L44.533 155.585L44.5301 155.091C42.5732 155.394 40.5654 155.562 38.5189 155.585C17.5842 155.814 0.52215 140.678 0.40983 121.778C0.29751 102.878 17.1774 87.3704 38.1122 87.141C40.5408 87.1144 42.9173 87.2946 45.2213 87.6635C50.0879 70.3512 70.732 57.1798 95.5395 56.9081C120.317 56.6367 141.095 69.3232 146.198 86.4951C167.377 88.7242 183.695 102.758 183.797 119.921C183.897 136.766 168.344 150.939 147.773 154.005L147.776 154.454L143.019 154.507C142.04 154.568 141.053 154.605 140.057 154.616C139.061 154.626 138.073 154.611 137.093 154.571Z"
          fill="url(#paint1_linear_105_447)"
        />
      </g>
      <defs>
        <filter id="filter0_i_105_447" x="46" y="0" width="165" height="176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="32.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.423529 0 0 0 0 0.129412 0 0 0 1 0" />
          <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_105_447" />
        </filter>
        <filter id="filter1_bi_105_447" x="-19.5907" y="36.9038" width="223.388" height="138.683" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_105_447" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_105_447" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_105_447" />
        </filter>
        <linearGradient id="paint0_linear_105_447" x1="128.5" y1="0" x2="128.5" y2="156" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D19113" />
          <stop offset="1" stopColor="#FFD358" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="paint1_linear_105_447" x1="91.6591" y1="56.9447" x2="92.5877" y2="155.13" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="#8699AD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cloudy