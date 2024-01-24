import React from 'react'

const Clouds = ({ width = 184, height = 100 }: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 184 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_bi_105_214)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.093 98.5714L44.533 99.5847L44.5301 99.0906C42.5732 99.3939 40.5654 99.5623 38.5189 99.5847C17.5842 99.8141 0.52215 84.6783 0.40983 65.7781C0.29751 46.8779 17.1774 31.3704 38.1122 31.141C40.5408 31.1144 42.9173 31.2946 45.2213 31.6635C50.0879 14.3512 70.732 1.17978 95.5395 0.90807C120.317 0.636683 141.095 13.3232 146.198 30.4951C167.377 32.7242 183.695 46.7579 183.797 63.9213C183.897 80.7661 168.344 94.9389 147.773 98.0048L147.776 98.4544L143.019 98.5065C142.04 98.568 141.053 98.6046 140.057 98.6155C139.061 98.6264 138.073 98.6115 137.093 98.5714Z"
          fill="url(#paint0_linear_105_214)"
        />
      </g>
      <defs>
        <filter id="filter0_bi_105_214" x="-19.5907" y="-19.0962" width="223.388" height="138.683" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_105_214" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_105_214" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_105_214" />
        </filter>
        <linearGradient id="paint0_linear_105_214" x1="91.6591" y1="0.944686" x2="92.5877" y2="99.1303" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="#8699AD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Clouds