import React from 'react'

const Sunny = ({width = 165, height = 156}: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 165 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_105_475)">
        <ellipse cx="82.5" cy="78" rx="82.5" ry="78" fill="url(#paint0_linear_105_475)" />
      </g>
      <defs>
        <filter id="filter0_i_105_475" x="0" y="0" width="165" height="176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="32.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.423529 0 0 0 0 0.129412 0 0 0 1 0" />
          <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_105_475" />
        </filter>
        <linearGradient id="paint0_linear_105_475" x1="82.5" y1="0" x2="82.5" y2="156" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D19113" />
          <stop offset="1" stopColor="#FFD358" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Sunny