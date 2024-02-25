import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }
}
