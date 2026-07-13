import type { Timeframe } from '../types';

interface ProfileCardProps {
  timeframe: Timeframe;
  onTimeframeChange: (timeframe: Timeframe) => void;
}

const timeframes: { key: Timeframe; label: string }[] = [
  { key: 'daily', label: 'Daily' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' },
];

export default function ProfileCard({ timeframe, onTimeframeChange }: ProfileCardProps) {
  return (
    <div className="bg-navy-900 rounded-2xl overflow-hidden lg:flex lg:flex-col lg:row-span-2">
      <div className="bg-purple-600 p-6 md:p-9 lg:p-8 lg:flex-1 flex items-center gap-5 lg:flex-col lg:items-start lg:gap-10 rounded-2xl">
        <img
          src="/images/image-jeremy.png"
          alt="Jeremy Robson"
          className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-white rounded-full"
        />
        <div>
          <p className="text-[15px] text-navy-200 mb-1">Report for</p>
          <h1 className="text-2xl md:text-[40px] font-light leading-tight">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="flex justify-between px-6 py-6 md:justify-start md:gap-8 lg:flex-col lg:gap-5 lg:px-8">
        {timeframes.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onTimeframeChange(key)}
            className={`bg-transparent border-none font-rubik text-lg cursor-pointer transition-colors duration-200 hover:text-white focus:text-white ${
              timeframe === key ? 'text-white' : 'text-purple-500'
            }`}
            aria-pressed={timeframe === key}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}