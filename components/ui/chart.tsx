"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: { label: string; value: number }[];
  height?: number;
  showLabels?: boolean;
  showValues?: boolean;
  className?: string;
}

export function Chart({
  data,
  height = 200,
  showLabels = true,
  showValues = true,
  className,
  ...props
}: ChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const padding = 20;
  const barWidth = `${100 / data.length}%`;

  return (
    <div className={cn("w-full", className)} style={{ height }} {...props}>
      <div className="relative h-full w-full">
        {/* Chart grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-full border-t border-gray-200 dark:border-gray-800"
            />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end justify-around">
          {data.map((item, i) => {
            const height = `${(item.value / maxValue) * 100}%`;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center"
                style={{ width: barWidth }}
              >
                <div
                  className="w-[60%] rounded-t bg-blue-500 transition-all group-hover:bg-blue-600"
                  style={{ height }}
                />
                {showLabels && (
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    {item.label}
                  </div>
                )}
                {showValues && (
                  <div className="absolute -top-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded-md bg-gray-800 px-2 py-1 text-xs text-white">
                      {item.value}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function LineChart({
  data,
  height = 200,
  className,
  ...props
}: ChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (d.value / maxValue) * 100,
  }));

  const path = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  return (
    <div className={cn("w-full", className)} style={{ height }} {...props}>
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 25}
            x2="100"
            y2={i * 25}
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
        ))}

        {/* Line */}
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        />

        {/* Points */}
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="2"
            className="fill-current text-blue-500"
          />
        ))}
      </svg>

      {/* Labels */}
      <div className="mt-2 flex justify-between text-xs text-gray-600 dark:text-gray-400">
        {data.map((item, i) => (
          <div key={i}>{item.label}</div>
        ))}
      </div>
    </div>
  );
}