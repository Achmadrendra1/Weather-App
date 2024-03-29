import React from 'react'

const Location = ({width = 24, height = 24}: React.ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_123_1824)">
        <g filter="url(#filter0_dii_123_1824)">
          <path
            d="M12 23.728L5.636 17.364C4.37734 16.1053 3.52019 14.5017 3.17293 12.7559C2.82567 11.01 3.00391 9.20044 3.6851 7.55591C4.36629 5.91139 5.51984 4.50579 6.99988 3.51686C8.47992 2.52793 10.22 2.00009 12 2.00009C13.78 2.00009 15.5201 2.52793 17.0001 3.51686C18.4802 4.50579 19.6337 5.91139 20.3149 7.55591C20.9961 9.20044 21.1743 11.01 20.8271 12.7559C20.4798 14.5017 19.6227 16.1053 18.364 17.364L12 23.728ZM16.95 15.95C17.9289 14.971 18.5955 13.7237 18.8656 12.3659C19.1356 11.008 18.9969 9.60061 18.4671 8.32157C17.9373 7.04253 17.04 5.94932 15.8889 5.18018C14.7378 4.41104 13.3844 4.00052 12 4.00052C10.6156 4.00052 9.26222 4.41104 8.11109 5.18018C6.95996 5.94932 6.06275 7.04253 5.53292 8.32157C5.00308 9.60061 4.86442 11.008 5.13445 12.3659C5.40449 13.7237 6.07111 14.971 7.05 15.95L12 20.9L16.95 15.95V15.95ZM12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0392 10 11.5304 10 11C10 10.4696 10.2107 9.96087 10.5858 9.5858C10.9609 9.21073 11.4696 9.00001 12 9.00001C12.5304 9.00001 13.0391 9.21073 13.4142 9.5858C13.7893 9.96087 14 10.4696 14 11C14 11.5304 13.7893 12.0392 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter id="filter0_dii_123_1824" x="-55" y="-43.9999" width="126" height="129.728" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_123_1824" />
          <feOffset dx="-4" dy="8" />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_1824" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_1824" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-6" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_123_1824" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="2" dy="-3" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_123_1824" result="effect3_innerShadow_123_1824" />
        </filter>
        <clipPath id="clip0_123_1824">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Location