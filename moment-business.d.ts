import * as moment from 'moment';

declare module 'moment' {
  interface Business {
    addWeekDays(moment: moment, amount: number): moment;

    isWeekDay(moment: moment): boolean;

    isWeekendDay(moment: moment): boolean;

    subtractWeekDays(moment: moment, amount: number): moment;

    weekDays(startMoment: moment, endMoment: moment): number;

    weekendDays(startMoment: moment, endMoment: moment): number;
  }
}
