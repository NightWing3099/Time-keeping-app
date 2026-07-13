import type { Activity, Timeframe } from '../types';
import { activityColors } from '../data/activityColors';

interface ActivityCardProps {
  activity: Activity;
  timeframe: Timeframe;
}

const previousLabels: Record<Timeframe, string> = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

function formatHours(hours: number): string {
  return `${hours}hr${hours === 1 ? '' : 's'}`;
}

export default function ActivityCard({ activity, timeframe }: ActivityCardProps) {
  const colors = activityColors[activity.title] ?? {
    bg: 'bg-navy-900',
    icon: '/images/icon-work.svg',
  };
  const { current, previous } = activity.timeframes[timeframe];

  return (
    <div className="rounded-2xl overflow-hidden relative flex flex-col">
      <div className={`${colors.bg} h-10 relative overflow-hidden rounded-t-2xl`}>
        <img
          src={colors.icon}
          alt=""
          className="absolute right-4 -top-2 w-[4.5rem] h-[4.5rem]"
        />
      </div>
      <div className="bg-navy-900 rounded-2xl p-6 flex-1 relative -mt-4 transition-colors duration-200 hover:bg-navy-800 cursor-pointer">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">{activity.title}</h2>
          <button
            className="bg-transparent border-none cursor-pointer p-1 opacity-60 hover:opacity-100 transition-opacity duration-200"
            aria-label={`${activity.title} options`}
          >
            <img src="/images/icon-ellipsis.svg" alt="" />
          </button>
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2 md:mt-4 lg:mt-6">
          <p className="text-[32px] md:text-[56px] font-light">
            {formatHours(current)}
          </p>
          <p className="text-[15px] text-navy-200">
            {previousLabels[timeframe]} - {formatHours(previous)}
          </p>
        </div>
      </div>
    </div>
  );
}