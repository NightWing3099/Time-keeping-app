import type { Timeframe, Activity } from '../types';
import ProfileCard from './ProfileCard';
import ActivityCard from './ActivityCard';

interface DashboardProps {
  activities: Activity[];
  timeframe: Timeframe;
  onTimeframeChange: (timeframe: Timeframe) => void;
}

export default function Dashboard({
  activities,
  timeframe,
  onTimeframeChange,
}: DashboardProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 w-full max-w-[1110px] mb-8">
      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
        <ProfileCard
          timeframe={timeframe}
          onTimeframeChange={onTimeframeChange}
        />
      </div>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.title}
          activity={activity}
          timeframe={timeframe}
        />
      ))}
    </main>
  );
}