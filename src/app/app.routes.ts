import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
    {path: 'calendar',
    component: CalendarComponent,
    title: "Calendar Page"
}
];
export default routes;