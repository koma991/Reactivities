import { DateArg, format } from "date-fns";

export function formatData(date: DateArg<Date>){
    return format(date, 'yyyy-MM-dd h:mm a');
}