import React from 'react';

import useCopyToClipboard from '../../hooks/useCoppyToClipbord';

type CopyInviteCodeProps = {
  code: string;
};

const CopyInviteCode = ({ code }: CopyInviteCodeProps) => {
  const [, copy] = useCopyToClipboard();

  return (
    <div className="flex">
      <div className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-800 inline-block">
        {code}
      </div>
      <button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
        <span className="relative group-hover:text-white ">
          <button className="flex" onClick={() => copy(code)}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>Copy</div>
          </button>
        </span>
      </button>
    </div>
  );
};

export default CopyInviteCode;
