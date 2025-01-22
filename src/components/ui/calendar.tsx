import * as React from 'react';
import DayPicker from 'react-day-picker';  // Changed to default import

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className}: CalendarProps) {
  return (
    <DayPicker
      className={cn('p-3', className)}
      classNames={{
        month: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium', // Corrected to caption_label
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
      }}
    />
  );
}



Calendar.displayName = 'Calendar';

export { Calendar };
