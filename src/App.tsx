import { useState, useEffect } from 'react';
import type { Activity, Timeframe } from './types';
import Dashboard from './components/Dashboard';

export default function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [timeframe, setTimeframe] = useState<Timeframe>('weekly');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Activity[]) => setActivities(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="text-red-400 text-center p-8">
        Failed to load activity data: {error}
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="text-navy-200 text-center p-8">Loading...</div>
    );
  }

  return (
    <>
      <Dashboard
        activities={activities}
        timeframe={timeframe}
        onTimeframeChange={setTimeframe}
      />
      <footer className="text-[11px] text-center text-navy-200">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-navy-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="#" className="text-navy-200">
          Your Name Here
        </a>
        .
      </footer>
    </>
  );
}