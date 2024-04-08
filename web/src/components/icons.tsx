type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.426 2.5C16.3612 2.5 18.3334 5.29375 18.3334 7.9C18.3334 13.1781 10.1482 17.5 10.0001 17.5C9.85193 17.5 1.66675 13.1781 1.66675 7.9C1.66675 5.29375 3.63897 2.5 6.57416 2.5C8.25934 2.5 9.36119 3.35312 10.0001 4.10312C10.639 3.35312 11.7408 2.5 13.426 2.5Z"
        stroke="#F31260"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  message: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4996 9.58333C17.4996 13.4953 14.3283 16.6667 10.4163 16.6667C9.51896 16.6667 8.66061 16.4998 7.87057 16.1954C7.72612 16.1398 7.6539 16.112 7.59647 16.0987C7.53998 16.0857 7.49908 16.0803 7.44116 16.0781C7.38226 16.0758 7.31764 16.0825 7.18841 16.0958L2.92089 16.537C2.51402 16.579 2.31059 16.6001 2.19058 16.5269C2.08606 16.4631 2.01487 16.3566 1.99592 16.2356C1.97416 16.0968 2.07138 15.9168 2.2658 15.557L3.62885 13.034C3.7411 12.8262 3.79723 12.7223 3.82265 12.6225C3.84776 12.5238 3.85383 12.4527 3.8458 12.3512C3.83766 12.2484 3.79258 12.1147 3.70241 11.8472C3.46281 11.1363 3.33294 10.375 3.33294 9.58333C3.33294 5.67132 6.50426 2.5 10.4163 2.5C14.3283 2.5 17.4996 5.67132 17.4996 9.58333Z"
        stroke="#17C964"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  point: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.52169 2.3022C7.67534 1.99091 7.75217 1.83526 7.85647 1.78553C7.94722 1.74227 8.05264 1.74227 8.14339 1.78553C8.24769 1.83526 8.32452 1.99091 8.47817 2.3022L9.93596 5.25551C9.98132 5.34741 10.004 5.39336 10.0372 5.42904C10.0665 5.46063 10.1017 5.48622 10.1408 5.5044C10.185 5.52494 10.2357 5.53235 10.3371 5.54717L13.5979 6.02379C13.9413 6.07398 14.113 6.09908 14.1924 6.18295C14.2616 6.25592 14.2941 6.35619 14.2809 6.45584C14.2658 6.57038 14.1415 6.69144 13.8929 6.93358L11.5342 9.23094C11.4607 9.30255 11.4239 9.33836 11.4002 9.38096C11.3792 9.41869 11.3657 9.46013 11.3605 9.50299C11.3547 9.5514 11.3633 9.60199 11.3807 9.70315L11.9372 12.9481C11.9959 13.2903 12.0253 13.4614 11.9701 13.563C11.9221 13.6513 11.8368 13.7133 11.738 13.7316C11.6243 13.7527 11.4707 13.6719 11.1633 13.5103L8.24817 11.9772C8.15734 11.9294 8.11193 11.9056 8.06408 11.8962C8.02172 11.8879 7.97814 11.8879 7.93578 11.8962C7.88793 11.9056 7.84252 11.9294 7.75169 11.9772L4.83653 13.5103C4.5292 13.6719 4.37553 13.7527 4.2619 13.7316C4.16304 13.7133 4.07773 13.6513 4.02974 13.563C3.97459 13.4614 4.00394 13.2903 4.06264 12.9481L4.61918 9.70315C4.63653 9.60199 4.6452 9.5514 4.63933 9.50299C4.63413 9.46013 4.62066 9.41869 4.59966 9.38096C4.57593 9.33836 4.53917 9.30255 4.46564 9.23094L2.10696 6.93358C1.85836 6.69144 1.73406 6.57038 1.71894 6.45584C1.70578 6.35619 1.73829 6.25592 1.80742 6.18295C1.88688 6.09908 2.05857 6.07398 2.40195 6.02379L5.66279 5.54717C5.7642 5.53235 5.81491 5.52494 5.85906 5.5044C5.89816 5.48622 5.93336 5.46063 5.96271 5.42904C5.99586 5.39336 6.01854 5.34741 6.0639 5.25551L7.52169 2.3022Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ren: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.73393 6.66667H4.66659V5.33333C4.66659 3.49238 6.15897 2 7.99992 2C9.84087 2 11.3333 3.49238 11.3333 5.33333V6.66667H11.2659M7.99992 9.33333V10.6667M12.6666 10C12.6666 12.5773 10.5772 14.6667 7.99992 14.6667C5.42259 14.6667 3.33325 12.5773 3.33325 10C3.33325 7.42267 5.42259 5.33333 7.99992 5.33333C10.5772 5.33333 12.6666 7.42267 12.6666 10Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      ></path>
    </svg>
  ),
  add: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1V15M1 8H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevron_left: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#71717A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevron_right: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
