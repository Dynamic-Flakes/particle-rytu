import React from 'react';
import cn from '@/utils/cn';
import Countdown, { zeroPad } from 'react-countdown';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';

function CountdownDisplayWrapper({ days, hours, minutes, seconds }: any) {
  const { layout } = useLayout();

  return (
    <div
      className={cn(
        'flex items-center text-base font-medium -tracking-wider text-gray-900 dark:text-gray-100 xs:text-lg md:text-xl xl:text-xl 2xl:text-2xl',
        {
          'gap-3 md:gap-2.5 lg:gap-6 xl:gap-5 ':
            layout !== LAYOUT_OPTIONS.EXPLORER,
          'gap-4 lg:gap-2.5 3xl:gap-3.5 rtl:lg:gap-4':
            layout === LAYOUT_OPTIONS.EXPLORER,
        },
      )}
    >
      {!!days && (
        <div
          className={cn('shrink-0 3xl:w-20', {
            '3xl:w-auto': layout === LAYOUT_OPTIONS.EXPLORER,
          })}
        >
          <span className="">{zeroPad(days)}</span>
          <span
            className={cn({
              'md:hidden': layout !== LAYOUT_OPTIONS.EXPLORER,
              'lg:hidden': layout === LAYOUT_OPTIONS.EXPLORER,
            })}
          >
            d
          </span>
          <span
            className={cn(
              'hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 ',
              {
                'md:block': layout !== LAYOUT_OPTIONS.EXPLORER,
                'lg:block': layout === LAYOUT_OPTIONS.EXPLORER,
              },
            )}
          >
            Days
          </span>
        </div>
      )}
      <div
        className={cn('shrink-0 3xl:w-20', {
          '3xl:w-auto': layout === LAYOUT_OPTIONS.EXPLORER,
        })}
      >
        <span className="">{zeroPad(hours)}</span>
        <span
          className={cn({
            'md:hidden': layout !== LAYOUT_OPTIONS.EXPLORER,
            'lg:hidden': layout === LAYOUT_OPTIONS.EXPLORER,
          })}
        >
          h
        </span>
        <span
          className={cn(
            'hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400',
            {
              'md:block': layout !== LAYOUT_OPTIONS.EXPLORER,
              'lg:block': layout === LAYOUT_OPTIONS.EXPLORER,
            },
          )}
        >
          Hours
        </span>
      </div>
      <div
        className={cn('shrink-0 3xl:w-20', {
          '3xl:w-auto': layout === LAYOUT_OPTIONS.EXPLORER,
        })}
      >
        <span className="">{zeroPad(minutes)}</span>
        <span
          className={cn({
            'md:hidden': layout !== LAYOUT_OPTIONS.EXPLORER,
            'lg:hidden': layout === LAYOUT_OPTIONS.EXPLORER,
          })}
        >
          m
        </span>
        <span
          className={cn(
            'hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 ',
            {
              'md:block': layout !== LAYOUT_OPTIONS.EXPLORER,
              'lg:block': layout === LAYOUT_OPTIONS.EXPLORER,
            },
          )}
        >
          Minutes
        </span>
      </div>
      <div
        className={cn('shrink-0 3xl:w-20', {
          '3xl:w-auto': layout === LAYOUT_OPTIONS.EXPLORER,
        })}
      >
        <span className="">{zeroPad(seconds)}</span>
        <span
          className={cn({
            'md:hidden': layout !== LAYOUT_OPTIONS.EXPLORER,
            'lg:hidden': layout === LAYOUT_OPTIONS.EXPLORER,
          })}
        >
          s
        </span>
        <span
          className={cn(
            'hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 ',
            {
              'md:block': layout !== LAYOUT_OPTIONS.EXPLORER,
              'lg:block': layout === LAYOUT_OPTIONS.EXPLORER,
            },
          )}
        >
          Seconds
        </span>
      </div>
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return null;
  } else {
    return (
      <CountdownDisplayWrapper
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default function AuctionCountdown({
  date,
}: {
  date: string | number | Date | undefined;
}) {
  return <Countdown date={date} renderer={renderer} />;
}
