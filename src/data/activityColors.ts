import type { ActivityColor } from '../types';

export const activityColors: Record<string, ActivityColor> = {
  Work: {
    bg: 'bg-orange-300',
    icon: '/images/icon-work.svg',
  },
  Play: {
    bg: 'bg-blue-300',
    icon: '/images/icon-play.svg',
  },
  Study: {
    bg: 'bg-pink-400',
    icon: '/images/icon-study.svg',
  },
  Exercise: {
    bg: 'bg-green-400',
    icon: '/images/icon-exercise.svg',
  },
  Social: {
    bg: 'bg-purple-700',
    icon: '/images/icon-social.svg',
  },
  'Self Care': {
    bg: 'bg-yellow-300',
    icon: '/images/icon-self-care.svg',
  },
};