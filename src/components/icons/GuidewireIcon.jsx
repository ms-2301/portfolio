import React from 'react';

export default function GuidewireIcon({ className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="gwGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="12" fill="url(#gwGrad)" />
      <g transform="translate(8,12) scale(0.8)" fill="#fff">
        <path d="M10 8c0-3.3 2.7-6 6-6h12c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H16c-3.3 0-6-2.7-6-6V8zm6 0v20h12V8H16z" opacity="0.95" />
        <path d="M22 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" fill="#fff" />
      </g>
    </svg>
  );
}
