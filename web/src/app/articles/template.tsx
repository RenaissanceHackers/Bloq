"use client";

import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
      <div className=" flex w-full justify-center">
        <div className="fixed bottom-0 flex w-full max-w-[960px] justify-center rounded-3xl bg-background py-2">
          <div className="flex w-full justify-around rounded-lg py-2.5">
            <div className="flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4813 4C26.1776 4 29.3332 8.47 29.3332 12.64C29.3332 21.085 16.2369 28 15.9998 28C15.7628 28 2.6665 21.085 2.6665 12.64C2.6665 8.47 5.82206 4 10.5184 4C13.2147 4 14.9776 5.365 15.9998 6.565C17.0221 5.365 18.785 4 21.4813 4Z"
                  stroke="#F31260"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg">328</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9997 12.3333C25.9997 18.5926 20.9256 23.6667 14.6663 23.6667C13.2306 23.6667 11.8573 23.3997 10.5932 22.9127C10.3621 22.8237 10.2465 22.7792 10.1546 22.758C10.0643 22.7371 9.99883 22.7284 9.90614 22.7249C9.81191 22.7213 9.70852 22.732 9.50175 22.7534L2.67372 23.4592C2.02273 23.5265 1.69723 23.5601 1.50523 23.443C1.33799 23.341 1.22409 23.1706 1.19377 22.977C1.15896 22.7548 1.3145 22.4669 1.62558 21.8911L3.80645 17.8544C3.98606 17.522 4.07586 17.3558 4.11653 17.1959C4.1567 17.0381 4.16641 16.9243 4.15357 16.7619C4.14056 16.5975 4.06842 16.3835 3.92416 15.9555C3.54079 14.8181 3.333 13.6 3.333 12.3333C3.333 6.07411 8.4071 1 14.6663 1C20.9256 1 25.9997 6.07411 25.9997 12.3333Z"
                  stroke="#17C964"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg">328</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6665 7.4C1.6665 5.15979 1.6665 4.03969 2.10248 3.18404C2.48597 2.43139 3.09789 1.81947 3.85054 1.43597C4.70619 1 5.82629 1 8.0665 1H13.9332C16.1734 1 17.2935 1 18.1491 1.43597C18.9018 1.81947 19.5137 2.43139 19.8972 3.18404C20.3332 4.03969 20.3332 5.15979 20.3332 7.4V25L10.9998 19.6667L1.6665 25V7.4Z"
                  stroke="#F5A524"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg">328</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 13V18.6C25 20.8402 25 21.9603 24.564 22.816C24.1805 23.5686 23.5686 24.1805 22.816 24.564C21.9603 25 20.8402 25 18.6 25H7.4C5.15979 25 4.03969 25 3.18404 24.564C2.43139 24.1805 1.81947 23.5686 1.43597 22.816C1 21.9603 1 20.8402 1 18.6V13M18.3333 6.33333L13 1M13 1L7.66667 6.33333M13 1V17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-lg">328</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
